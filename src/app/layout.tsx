import type { Metadata } from "next";
import { inter } from "@/utils/fonts";

import "./globals.css";
import Sidebar from "@/components/layout/sidebar";

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
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
