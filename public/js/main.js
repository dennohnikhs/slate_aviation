document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('form[data-form]').forEach((form) => {
    const status = form.querySelector('.form-status');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      status.textContent = 'Sending...';
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || 'Submission failed');
        status.textContent = result.message;
        form.reset();
      } catch (error) {
        status.textContent = error.message;
      }
    });
  });
});
