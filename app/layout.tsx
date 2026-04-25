import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playground Log | James Bermudo",
  description:
    "A small corner of the internet where I dump my learning notes on math, AI, and other things that interest me.",
  metadataBase: new URL("https://jamesbermudo.com"),
  openGraph: {
    title: "Playground Log | James Bermudo",
    description:
      "A small corner of the internet where I dump my learning notes on math, AI, and other things that interest me.",
    url: "https://jamesbermudo.com",
    siteName: "Playground Log",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1280,
        height: 720,
        alt: "Playground Log by James Bermudo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playground Log | James Bermudo",
    description:
      "A small corner of the internet where I dump my learning notes on math, AI, and other things that interest me.",
    creator: "@jcebermudo",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  authors: [{ name: "James Bermudo", url: "https://jamesbermudo.com" }],
  creator: "James Bermudo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif4.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
