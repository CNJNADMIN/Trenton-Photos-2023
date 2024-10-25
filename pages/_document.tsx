import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/fava.png" />
          <meta
            name="description"
            content="See pictures from CNJN's Trenton grand opening."
          />
          <meta property="og:site_name" content="cnjn.photo.app" />
          <meta
            property="og:description"
            content="See pictures from CNJN's Trenton grand opening."
          />
          <meta property="og:title" content="CNJN's Trenton grand opening" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="CNJN's Trenton grand opening" />
          <meta
            name="twitter:description"
            content="See pictures from CNJN's Trenton grand opening."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
