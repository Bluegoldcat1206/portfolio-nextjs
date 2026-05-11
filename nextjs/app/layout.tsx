import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {  
  title: "The Unhinged Creative",
  description: "Natalie Cole's design portfolio",
  verification: {
    google: "vxk2Nq4Riau-iLBa-eAZ4JIAe9T6qL55uJ7ZNIRt8Yw",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <div className="header-section">
            <div className="layout-logo"></div>
            <h2 className="layout-title">The<br/>Unhinged<br/>Creative</h2>
          </div>

          <div className="nav-dots">
            <a href="/" className="nav-dot">About</a>
            <a href="/portfolio" className="nav-dot">Portfolio</a>
            <a href="/" className="nav-dot">FAQ's</a>
            <a href="/" className="nav-dot">Reviews</a>
            <a href="/contact" className="nav-dot">Contact</a>
          </div>
        </div>

        {children}
      </body>
      <GoogleAnalytics gaId="G-9WTTPWKGYS" />
    </html>
  );
}