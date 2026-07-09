import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

// Every demo is private sales material — keep the whole project out of search.
export const metadata: Metadata = {
  title: "ViTek Systems — Client Concepts",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
