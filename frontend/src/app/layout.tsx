import React from "react";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import LayoutWrapper from "@/components/Layout/LayoutWrapper";

import { Providers } from "./providers";

import "./globals.css";

// TODO: CHANGE TO YOUR FONT
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zellar",
  description:
    "Zellar is DeFi Protocol for Lending and Leverage Yield Farming!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
