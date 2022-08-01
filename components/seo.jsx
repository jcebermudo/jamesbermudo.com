import Head from "next/head";

export default function SEO({
  title = "James Bermudo",
  og = "index.png",
  description = "A designer living in Quezon City, Philippines.",
}) {
  const siteTitle = "James Bermudo";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="robots" content="index,follow" />
      <title>{`${title}`}</title>
      <meta name="description" content={description} />
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
      <meta property="twitter:creator" content="jcebermudo" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <link
        href="https://bermudo.me/images/favicon/favicon.ico"
        rel="icon"
        type="image/x-icon"
      />
    </Head>
  );
}
