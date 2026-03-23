import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css"; // Global styles

import { portfolioContent } from "@/data/content";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thomasdebroize.com"),
  title: {
    default: "Thomas Debroize | Portfolio",
    template: `%s | ${portfolioContent.seo.title}`,
  },
  description: "Portfolio de Thomas Debroize, développeur Fullstack",
  keywords: portfolioContent.seo.keywords,
  authors: [{ name: portfolioContent.seo.author }],
  creator: portfolioContent.seo.author,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: portfolioContent.seo.url,
    title: portfolioContent.seo.title,
    description: portfolioContent.seo.description,
    siteName: portfolioContent.seo.title,
    images: [
      {
        url: portfolioContent.seo.ogImage,
        width: 1200,
        height: 630,
        alt: portfolioContent.seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioContent.seo.title,
    description: portfolioContent.seo.description,
    images: [portfolioContent.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: portfolioContent.seo.googleVerification,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-WJ7N99VSK0`} // Remplacez par votre ID de suivi Google Analytics
        />
        <script
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
      <body
        className="font-body bg-dune-bg text-dune-text antialiased selection:bg-dune-spice selection:text-dune-bg overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
