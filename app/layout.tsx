import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "EMR Patient Care",
  description: "A system for patient care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
