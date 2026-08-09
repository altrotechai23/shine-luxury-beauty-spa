import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";



const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shinebeautyspa.co.za"),

  title: {
    default: "Shine Luxury Beauty Spa",
    template: "%s | Shine Luxury Beauty Spa",
  },

  description:
    "Luxury beauty, hair, skin, nails and wellness treatments crafted to help you look and feel your absolute best.",

  keywords: [
    "Beauty Spa",
    "Hair Salon",
    "Luxury Spa",
    "Facials",
    "Nails",
    "Lashes",
    "Beauty Treatments",
    "South Africa",
  ],

  applicationName: "Shine Luxury Beauty Spa",

  authors: [
    {
      name: "Altrotech AI",
    },
  ],

  creator: "Altrotech AI",

  publisher: "Shine Luxury Beauty Spa",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Shine Luxury Beauty Spa",
    description:
      "Luxury beauty treatments designed to leave you refreshed, confident and radiant.",
    type: "website",
    locale: "en_ZA",
    siteName: "Shine Luxury Beauty Spa",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shine Luxury Beauty Spa",
    description:
      "Luxury beauty treatments designed for modern women.",
  },
};

export const viewport: Viewport = {
  themeColor: "#62AAB5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${heading.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}