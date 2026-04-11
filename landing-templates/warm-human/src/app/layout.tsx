import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

// REQUIRED: Download Satoshi-Variable.woff2 from https://api.fontshare.com/v2/fonts/download/satoshi
// and save to public/fonts/Satoshi-Variable.woff2 before building.
// For warm-human: Fraunces (serif) for headings is also acceptable — see STYLE_PRESETS.md.
const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gather — The Community Platform for Thoughtful Creators",
  description:
    "Build meaningful connections with your audience through newsletters, courses, and community spaces.",
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
