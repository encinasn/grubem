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
      <meta property="og:title" content={name} />
      <meta property="og:type" content="product" />
      <meta property="og:url" content="http://www.ovejerosgrubem.com/" />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Von der Grubem Land" />
      <meta property="product:price:amount" content="30" />
      <meta property="product:price:currency" content="EUR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={name} />
      <meta name="twitter:site" content="@grubem" />
      <meta name="twitter:title" content="Von der Grubem Land" />
      <meta name="twitter:description" content="Descripción de la página" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@autor" />
      <meta name="twitter:data1" content="3&#8364;" />
      <meta name="twitter:label1" content="Precio" />
      <meta name="twitter:data2" content="Rojo" />
      <meta name="twitter:label2" content="Color" />

      {/*Schema.org para Google+ */}
      <meta itemProp="name" content="Nombre de la página web" />
      <meta itemProp="description" content="Descripción de la página" />
      <meta
        itemProp="image"
        content="http://www.midominio.com/imagen.jpg"
      ></meta>
    </Head>
  );
};

export default HeadDogs;
