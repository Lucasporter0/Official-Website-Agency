import "./globals.css";

export const metadata = {
  title: "Natural Edge Media — Websites that convert",
  description: "Clean, high-converting websites for health & wellness brands.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
