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
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
      </Head>
      <body className="text-[#2D303E] bg-[#F4F4F5] selection:bg-[#2D303E] selection:text-[#ffffff] text-lg sm:text-base">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
