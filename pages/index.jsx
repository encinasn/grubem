import Head from 'next/head';
import Separator from '@shared/Separator';
import Section from '@shared/Section';
import DogTypes from '@shared/DogTypes';
import PostsList from '@shared/posts/PostsList';
import Landing from '@feature/home/Landing';
import TitleSection from '@shared/TitleSection';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Criadero Grubem</title>
      </Head>
      <Landing />

      <Section margin="2rem 0">
        <TitleSection variant="h2" section="ovejeros alemanes">
          Nuestros Ejemplares
        </TitleSection>
        <DogTypes />
      </Section>

      <Section margin="2rem 0">
        <TitleSection variant="h2" section="criadero">
          Ultimas publicaciones
        </TitleSection>
        <Separator/>
      </Section>
      <PostsList />
    </>
  );
};

export default HomePage;
