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
  title: "Streamline — Project Management for Modern Teams",
  description:
    "The simple, powerful tool that helps teams plan, track, and deliver work with clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${satoshi.variable}`}>
      <body className="font-heading bg-background text-primary">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
