import Head from 'next/head';
// components
import LoginForm from '@feature/admin/LoginForm';
import Section from '@shared/Section';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Iniciar Sesión | Ovejeros Grubem</title>
      </Head>

      <Section top="10rem">
        <div>
          <LoginForm />
        </div>
      </Section>

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default LoginPage;
