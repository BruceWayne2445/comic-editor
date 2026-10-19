import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FRAMEFORGE — Comic Studio",
  description:
    "Create, edit, and organize your own comic chapters with FRAMEFORGE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
