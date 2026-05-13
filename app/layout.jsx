import './globals.css';
import { Inter } from 'next/font/google';
import SiteHeader from '../src/components/SiteHeader';
import SiteFooter from '../src/components/SiteFooter';
import { siteConfig } from '../src/lib/site-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a className="absolute left-[-999px] top-0 z-[1000] bg-white px-3 py-2 text-black focus:left-3 focus:top-3" href="#main">Skip to content</a>
        <SiteHeader siteConfig={siteConfig} />
        {children}
        <SiteFooter siteConfig={siteConfig} />
      </body>
    </html>
  );
}
