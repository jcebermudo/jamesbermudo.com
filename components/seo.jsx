import Head from "next/head";

export default function SEO({
  title = "James Bermudo",
  og = "main.png",
  description = "A designer living in Quezon City, Philippines.",
}) {
  const siteTitle = "James Bermudo";

  return (
    <Head>
      <link
        rel="preload"
        href="/fonts/ibm-plex-sans-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/ibm-plex-sans-var-italic.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <meta name="viewport" content="width=device-width" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index,follow" />
      <title>{`${title}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="james bermudo, designer, blog" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="James Bermudo" />
      <meta
        property="og:image"
        content={`https://bermudo.me/images/meta/${og}`}
      />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="500" />
      <meta
        property="twitter:image"
        content={`https://bermudo.me/images/meta/${og}`}
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@jcebermudo" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link
        href="https://bermudo.me/images/favicon/favicon.ico"
        rel="icon"
        type="image/x-icon"
      />
      <link
        href="https://bermudo.me/images/favicon/apple-icon-180x180.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="https://bermudo.me/images/favicon/apple-icon-76x76.png"
        rel="apple-touch-icon"
        sizes="76x76"
      />
    </Head>
  );
}
