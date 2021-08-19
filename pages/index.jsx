import Head from 'next/head';
import DogTypes from '@shared/DogTypes';
import PostsList from '@shared/PostsList';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Criadero Grubem</title>
      </Head>
      <DogTypes />
      <PostsList />
    </>
  );
};

export default HomePage;
