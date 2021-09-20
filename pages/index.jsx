import Head from 'next/head';
// layout
import Layout from '@layout/Layout';
// components
import LandingVideo from '@feature/home/LandingVideo';
import CarouselDogs from '@feature/home/CarouselDogs';
import CarouselPosts from '@feature/home/CarouselPosts';
// services
import { getDogs, getPosts } from 'firebase/client';

const HomePage = ({ posts, dogs }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Ovejeros Alemanes - Von der Grubem Land</title>
          <meta name="description" content="Criadero de perros ovejeros alemanes..." />
          <meta name="keywords" content="perros, ovejeros, ovejeros alemanes" />
        </Head>

        <LandingVideo />

        <CarouselPosts preloadPosts={posts} />

        <CarouselDogs preloadDogs={dogs} />
      </Layout>
    </>
  );
};

export default HomePage;

export async function getStaticProps(context) {
  const posts = await getPosts();
  const dogs = await getDogs();

  return {
    props: {
      posts,
      dogs,
    },
  };
}
