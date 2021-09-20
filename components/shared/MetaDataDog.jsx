import Head from 'next/head';

const HeadDogs = ({
  name,
  image = '/images/photos/landing.jpg',
  description,
}) => {
  return (
    <Head>
      <title>{name}</title>

      {/* Open Graph para Facebook*/}
      <meta property="og:url" content="http://www.ovejerosgrubem.com/" />
      <meta property="og:type" content="product" />
      <meta property="og:title" content={name} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Von der Grubem Land" />
      <meta property="fb:app_id" content="386377543074223" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={name} />
      <meta name="twitter:site" content="@ovejerosgrubem" />
      <meta name="twitter:title" content={name} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@ovejerosgrubem" />

      {/*Schema.org para Google+ */}
      <meta itemProp="name" content={name} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
    </Head>
  );
};

export default HeadDogs;
