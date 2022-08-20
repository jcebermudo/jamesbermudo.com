import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/moderat-regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/moderat-bold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          href="/images/favicon/favicon.ico"
          rel="icon"
          type="image/x-icon"
        />
        <link
          href="/images/favicon/apple-icon-180x180.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/images/favicon/apple-icon-76x76.png"
          rel="apple-touch-icon"
          sizes="76x76"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
      </Head>
      <body className="text-[#333333] bg-[#FBFBFB] selection:bg-[#ff3cf5] selection:text-[#ffffff] text-lg sm:text-base">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
