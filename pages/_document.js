import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

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
          <meta
            name="description"
            content="Criadero de ovejeros alemanes"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#202020" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#FFFFFF" />

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
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://criaderogrubem.com/" />
          <meta name="twitter:title" content="Ovejeros Grubem" />
          <meta
            name="twitter:description"
            content="Ovejeros Alemanes"
          />
          <meta
            name="twitter:image"
            content="https://criaderogrubem.com//icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@CriaderoGRubEm" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ovejeros Grubem" />
          <meta
            property="og:description"
            content="Ovejeros Grubem la app para gestionar tu negocio"
          />
          <meta property="og:site_name" content="Ovejeros Grubem" />
          <meta property="og:url" content="https://criaderogrubem.com//" />
          <meta
            property="og:image"
            content="https://criaderogrubem.com//icons/icon-512x512.png"
          />

          {/*  apple splash screen images

          <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
          <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
          <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
          <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
          <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
          <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
          <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' /> */}
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
