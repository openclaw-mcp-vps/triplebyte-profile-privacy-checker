import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profile Privacy Checker — Audit What Recruiting Platforms Expose",
  description: "Scan Triplebyte, AngelList, and other recruiting platforms to see exactly what personal and professional data is publicly visible about you."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f3ae4531-a847-4bd5-939b-49ff0e51920e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
