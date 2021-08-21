// components
import LoginForm from '@feature/login/LoginForm';
import Section from '@shared/Section';

const LoginPage = () => {
  return (
    <>
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
