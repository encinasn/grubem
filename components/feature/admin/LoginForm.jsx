import { useForm } from 'react-hook-form';
// components
import Input from '@shared/inputs/InputLogin';
import Button from '@shared/Button';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
import { regExpression, regMessage } from 'utils/regExr';
// hooks
import useUser from 'hooks/useUser';

const LoginForm = () => {
  const { loginUser, loading, error } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => loginUser(data.email, data.password);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">
          <h1>Iniciar sesión</h1>
        </div>

        <Input
          label="Correo Electronico"
          icon="email"
          type="text"
          name="email"
          disabled={loading.login}
          placeholder="ejemplo@mail.com"
          errorMessage={errors.email}
          ref={register('email', {
            required: {
              value: true,
              message: regMessage.required,
            },
            pattern: {
              value: regExpression.email,
              message: regMessage.email,
            },
          })}
        />
        <Input
          label="Contraseña"
          type="password"
          icon="password"
          name="password"
          disabled={loading.login}
          placeholder="Contraseña"
          errorMessage={errors.password}
          ref={register('password', {
            required: {
              value: true,
              message: regMessage.required,
            },
            pattern: {
              value: regExpression.password,
              message: regMessage.password,
            },
          })}
        />

        <Button
          type="submit"
          variant="primary"
          margin="1.6rem 0 0 0"
          loading={loading.login}
          onClick={handleSubmit(onSubmit)}
        >
          Iniciar sesión
        </Button>
      </form>

      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
          max-width: 420px;
        }

        .title {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 20px;
          width: 100%;
          font-size: 2.4rem;
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
          form {
            width: 100%;
            min-width: 400px;
            margin-top: 0;
            margin-bottom: 2rem;

            height: max-content;
            border: 1px solid var(--mid-gray);
            border-radius: var(--large-radius);
          }
        }
      `}</style>
    </>
  );
};

export default LoginForm;
