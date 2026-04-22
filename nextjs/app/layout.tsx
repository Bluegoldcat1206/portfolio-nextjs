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
      <body>
        <div className="header-section">
          <div className="layout-logo"></div>
          <h2 className="layout-title">The<br/>Unhinged<br/>Creative</h2>
        </div>

        <div className="nav-dots">
          <a href="/" className="nav-dot">About</a>
          <a href="/portfolio" className="nav-dot">Portfolio</a>
          <a href="/" className="nav-dot">FAQ's</a>
          <a href="/" className="nav-dot">Reviews</a>
          <a href="/#contact" className="nav-dot">Contact</a>
        </div>

        {children}
      </body>
    </html>
  );
}