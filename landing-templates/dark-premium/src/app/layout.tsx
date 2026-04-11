import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

// REQUIRED: Download Satoshi-Variable.woff2 from https://api.fontshare.com/v2/fonts/download/satoshi
// and save to public/fonts/Satoshi-Variable.woff2 before building.
const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ship Faster — Accelerate Your Development Workflow",
  description:
    "The modern development platform that helps teams ship production-ready code in half the time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${satoshi.variable}`}>
      <body className="font-heading bg-background text-primary">
        <div className="grain-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
