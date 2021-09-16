import Head from 'next/head';
// layout
import Layout from '@layout/Layout';
// components
import Separator from '@shared/Separator';
import Section from '@shared/Section';
import PostsList from '@shared/posts/PostsList';
import LandingVideo from '@feature/home/LandingVideo';
import TitleSection from '@shared/TitleSection';
import CarrouselSection from '@feature/home/CarrouselSection';
// services
import { getDogs, getPosts } from 'firebase/client';

const HomePage = ({ posts, dogs }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Ovejeros Grubem</title>
        </Head>
        <LandingVideo />

        <CarrouselSection preloadDogs={dogs} />

        <Section top="3rem" bottom="1rem">
          <Separator />
          <TitleSection variant="h2" section="criadero">
            Ultimas publicaciones
          </TitleSection>
        </Section>

        <PostsList preloadPosts={posts} />
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
