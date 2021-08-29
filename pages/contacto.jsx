import Head from 'next/head';
// layout
import Layout from '@layout/Layout';
// components
import Section from '@shared/Section';
import TitleSection from '@shared/TitleSection';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contacto | Criadero Grubem</title>
      </Head>

      <Section top="10rem" bottom="1rem">
        <TitleSection variant="h2" section="">
          Contacto
        </TitleSection>
      </Section>
    </>
  );
};

ContactPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ContactPage;
