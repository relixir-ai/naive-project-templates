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
  title: "Spark — Create Stunning Content in Minutes",
  description:
    "The creative platform that turns ideas into polished, share-ready content with AI-powered tools.",
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
