import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solana PnL Tracker",
  description: "High-performance Solana wallet balance and PnL tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
