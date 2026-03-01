import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://earnable.ai"),

  title: {
    default: "Earnable — Analyze Content & Unlock Monetization Opportunities",
    template: "%s | Earnable",
  },

  description:
    "Earnable analyzes your content to identify revenue gaps, monetization readiness, and actionable recommendations to help creators maximize earnings.",

  keywords: [
    "content monetization tool",
    "creator monetization",
    "affiliate marketing optimization",
    "content analysis AI",
    "monetization readiness",
    "revenue optimization for creators",
    "blog monetization tool",
    "creator revenue analysis",
    "affiliate optimization AI",
  ],

  authors: [{ name: "Earnable" }],
  creator: "Earnable",
  publisher: "Earnable",

  openGraph: {
    title: "Earnable — Unlock Monetization Opportunities in Your Content",
    description:
      "Analyze your content and discover revenue gaps, monetization readiness, and exact recommendations to increase earnings.",
    url: "https://earnable.ai",
    siteName: "Earnable",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Earnable Content Monetization Analyzer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Earnable — Monetize Your Content Smarter",
    description:
      "Analyze your content and discover monetization gaps and revenue opportunities.",
    images: ["/og-image.png"],
    creator: "@earnable",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://earnable.ai",
  },

  category: "technology",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
