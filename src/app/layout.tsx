import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {syne, dmMono, lora, playfair_display} from '@/app/fonts'


export const metadata: Metadata = {
    title: "Sheik Aahin | Frontend Developer",
    description: "Frontend developer with 2+ years of experience building React & Node.js applications. Open to full-time and freelance roles.",
    keywords: [
        "Frontend Developer",
        "React Developer", 
        "Next.js Developer",
        "Full Stack Developer",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Sheik Aahin",
        "Portfolio"
    ],
    authors: [{ name: "Sheik Aahin" }],
    creator: "Sheik Aahin",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable} ${lora.variable} ${playfair_display.variable}`}>
      <body data-theme="light">{children}</body>
    </html>
  );
}
