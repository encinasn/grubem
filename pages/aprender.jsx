import Head from 'next/head';
// layout
import Layout from '@layout/Layout';
// components
import Section from '@shared/Section';
import TitleSection from '@shared/TitleSection';

const LearnPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Aprender | Criadero Grubem</title>
        </Head>

        <Section top="10rem" bottom="1rem">
          <TitleSection variant="h2" section="criadero">
            Aprender
          </TitleSection>
        </Section>
      </Layout>
    </>
  );
};

export default LearnPage;
