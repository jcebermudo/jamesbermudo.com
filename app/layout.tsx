import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sfPro = localFont({
  src: "./fonts/SF-Pro-Text-Regular.woff",
  variable: "--font-sf-pro",
  weight: "400",
});

const sfProMedium = localFont({
  src: "./fonts/SF-Pro-Text-Medium.woff",
  variable: "--font-sf-pro-medium",
  weight: "500",
});

export const metadata: Metadata = {
  title: "James Bermudo",
  description: "Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.variable} ${sfProMedium.variable} antialiased selection:bg-[#353535]`}
      >
        {children}
      </body>
    </html>
  );
}
