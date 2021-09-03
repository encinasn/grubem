import Head from 'next/head';
// layout
import Layout from '@layout/Layout';
// components
import Section from '@shared/Section';
import TitleSection from '@shared/TitleSection';

const CompetenciesPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Competencias | Criadero Grubem</title>
        </Head>

        <Section top="10rem" bottom="1rem">
          <TitleSection variant="h2" section="criadero">
            Competencias
          </TitleSection>
        </Section>
      </Layout>
    </>
  );
};

export default CompetenciesPage;
