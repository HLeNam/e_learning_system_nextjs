import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { inter } from "@/utils/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "E Learning System",
  description: "A simple e-learning system built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
