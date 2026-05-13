 const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const next = require('next');
const { allPages, buildCanonical } = require('./src/lib/site-data');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();
const port = Number(process.env.PORT || 3000);
const submissionsDir = path.join(__dirname, 'data');
const submissionsFile = path.join(submissionsDir, 'submissions.json');

function listenWithRetry(server, preferredPort, maxAttempts = 10) {
  return new Promise((resolve, reject) => {
    const attemptListen = (currentPort, attempt) => {
      const listener = server.listen(currentPort);

      listener.once('listening', () => resolve({ listener, port: currentPort }));

      listener.once('error', (error) => {
        if (error.code === 'EADDRINUSE' && attempt < maxAttempts - 1) {
          listener.close(() => attemptListen(currentPort + 1, attempt + 1));
          return;
        }

        reject(error);
      });
    };

    attemptListen(preferredPort, 0);
  });
}

function ensureSubmissionStore() {
  if (!fs.existsSync(submissionsDir)) fs.mkdirSync(submissionsDir, { recursive: true });
  if (!fs.existsSync(submissionsFile)) fs.writeFileSync(submissionsFile, '[]', 'utf8');
}

function persistSubmission(entry) {
  ensureSubmissionStore();
  const current = JSON.parse(fs.readFileSync(submissionsFile, 'utf8'));
  current.unshift(entry);
  fs.writeFileSync(submissionsFile, JSON.stringify(current, null, 2));
}

function createMailer() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || 'false') === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

async function sendSubmissionEmail(type, payload) {
  const transporter = createMailer();
  const recipient = process.env.ADMIN_EMAIL || process.env.SMTP_USER;
  const subjectPrefix = type === 'quote' ? 'New quote request' : 'New contact request';
  const messageLines = Object.entries(payload).map(([key, value]) => `${key}: ${value}`).join('\n');

  if (!transporter || !recipient) {
    console.log(`\n[${type.toUpperCase()} SUBMISSION]\n${messageLines}\n`);
    return { mode: 'console' };
  }

  await transporter.sendMail({
    from: process.env.FROM_EMAIL || process.env.SMTP_USER,
    to: recipient,
    subject: `${subjectPrefix} from Slate Aviation Services Africa`,
    text: messageLines,
  });

  return { mode: 'email' };
}

function validateBaseForm(body, required) {
  const errors = [];
  required.forEach((field) => {
    if (!body[field] || !String(body[field]).trim()) errors.push(field);
  });
  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) errors.push('email');
  if (body.phone && String(body.phone).trim().length < 7) errors.push('phone');
  return errors;
}

function buildSitemapXml() {
  const urls = allPages
    .map((page) => `  <url><loc>${buildCanonical(page.path)}</loc><changefreq>weekly</changefreq><priority>${page.priority || '0.7'}</priority></url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

function buildRobotsTxt() {
  return `User-agent: *\nAllow: /\nSitemap: ${buildCanonical('/sitemap.xml')}\n`;
}

async function start() {
  await app.prepare();
  const server = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use('/public', express.static(path.join(__dirname, 'public')));

  server.post('/api/inquiries/contact', async (req, res) => {
    const errors = validateBaseForm(req.body, ['name', 'email', 'phone', 'serviceInterest', 'message']);
    if (errors.length) return res.status(400).json({ ok: false, errors });

    const entry = {
      type: 'contact',
      submittedAt: new Date().toISOString(),
      ...req.body,
    };

    try {
      await sendSubmissionEmail('contact', entry);
      persistSubmission(entry);
      return res.json({ ok: true, message: 'Thanks — your inquiry has been received.' });
    } catch (error) {
      return res.status(500).json({ ok: false, message: 'Unable to submit form at the moment.' });
    }
  });

  server.post('/api/inquiries/quote', async (req, res) => {
    const errors = validateBaseForm(req.body, ['name', 'email', 'phone', 'serviceInterest', 'message', 'aircraftType', 'date', 'location']);
    if (errors.length) return res.status(400).json({ ok: false, errors });

    const entry = {
      type: 'quote',
      submittedAt: new Date().toISOString(),
      ...req.body,
    };

    try {
      await sendSubmissionEmail('quote', entry);
      persistSubmission(entry);
      return res.json({ ok: true, message: 'Quote request received. We will get back to you shortly.' });
    } catch (error) {
      return res.status(500).json({ ok: false, message: 'Unable to submit quote request at the moment.' });
    }
  });

  server.get('/robots.txt', (req, res) => {
    res.type('text/plain').send(buildRobotsTxt());
  });

  server.get('/sitemap.xml', (req, res) => {
    res.type('application/xml').send(buildSitemapXml());
  });

  server.get('*', (req, res) => handle(req, res));

  const { port: activePort } = await listenWithRetry(server, port);
  console.log(`Next.js site running on http://localhost:${activePort}`);
  console.log('Express API available on the same server for /api/*');
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
