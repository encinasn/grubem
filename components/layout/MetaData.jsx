import Head from 'next/head';

const MetaData = () => {
  return (
    <Head>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://criaderogrubem.com/" />
      <meta name="twitter:title" content="Ovejeros Grubem" />
      <meta name="twitter:description" content="Ovejeros Alemanes" />
      <meta
        name="twitter:image"
        content="https://criaderogrubem.com//images/brand/logo.png"
      />
      <meta name="twitter:creator" content="@CriaderoGRubEm" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ovejeros Grubem" />
      <meta property="og:description" content="Criadero de Ovejeros Alemanes" />
      <meta property="og:site_name" content="Ovejeros Grubem" />
      <meta property="og:url" content="https://criaderogrubem.com//" />
      <meta
        property="og:image"
        content="https://criaderogrubem.com//images/brand/logo.png"
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
  );
};

export default MetaData;
