import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { inter } from "@/utils/fonts";

import "./globals.css";
import { ThemeProvider } from "@/components/common";

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
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
