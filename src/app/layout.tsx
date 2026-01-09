// next.js types and font imports
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// configure main font - modern sans serif
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// configure monospace font for code elements
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// seo metadata for the website
export const metadata: Metadata = {
  title: "Epic Packaging Solutions - Professional Packaging Services",
  description: "Professional packaging solutions for businesses of all sizes. Custom boxes, protective materials, and eco-friendly options with fast nationwide delivery.",
};

// root layout component that wraps all pages
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
        {/* all page content goes here */}
        {children}
      </body>
    </html>
  );
}
