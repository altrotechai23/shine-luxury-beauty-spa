import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "SHINE Luxury Beauty Spa",
    template: "%s | SHINE Luxury Beauty Spa",
  },
  description:
    "Luxury Beauty Spa in Cape Town offering premium hair, nails, facials, skincare and beauty treatments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <Toaster
  richColors
  position="top-right"
  closeButton
/>
      </body>
    </html>
  );
}