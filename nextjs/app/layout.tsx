import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Unhinged Creative",
  description: "Natalie Cole's design portfolio",
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