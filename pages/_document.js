import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="Ovejeros Grubem" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Ovejeros Grubem" />
          <meta name="description" content="Criadero de Ovejeros Alemanes" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#202020" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#fafafa" />

          <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
          <link
            rel="apple-touch-icon"
            sizes="384x384"
            href="/icons/android-chrome-384x384.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/icons/android-chrome-192x192.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons/panda_iso_x1.svg"
            color="#202020"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        
        <body>
          <Main />
          <div id="popup" />
          <div id="modal" />
          <div id="toast" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
