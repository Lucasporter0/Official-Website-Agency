import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Natural Edge Media — Websites that convert",
  description: "Clean, high-converting websites for health & wellness brands.",
  metadataBase: new URL("https://www.naturaledgemedia.net"),
  openGraph: {
    title: "Natural Edge Media",
    description: "Websites that convert. Built fast, SEO-ready, and easy to scale.",
    url: "https://www.naturaledgemedia.net",
    siteName: "Natural Edge Media"
  },
  twitter: { card: "summary_large_image" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="container-edge py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
