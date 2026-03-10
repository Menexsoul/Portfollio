import type {Metadata} from 'next';
import Script from 'next/script';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Dune Brutalist Portfolio',
  description: 'A brutalist, immersive one-page portfolio inspired by Dune.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WJ7N99VSK0" />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WJ7N99VSK0');
            `,
          }}
        />
      </head>
      <body className="font-body bg-dune-bg text-dune-text antialiased selection:bg-dune-spice selection:text-dune-bg overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
