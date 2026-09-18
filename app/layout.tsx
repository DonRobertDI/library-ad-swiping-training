import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ad Swiping and Discovery Workflow | Library Operations",
  description:
    "A step-by-step operating guide for finding, reviewing, localizing, and organizing product ads.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
