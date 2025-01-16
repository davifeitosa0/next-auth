import SessionWrapper from "@/providers/SessionWrapper";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Auth Page",
  description: "Next.js app with authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="bg-[#1f1c24] antialiased">
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
