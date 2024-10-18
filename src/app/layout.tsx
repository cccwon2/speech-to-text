import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Speech to Text App",
  description: "Speech to Text App using OpenAI Whisper API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
