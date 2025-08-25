import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Natural Edge Media — Websites that convert",
  description: "Clean, high-converting websites for health & wellness brands."
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
