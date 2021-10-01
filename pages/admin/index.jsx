import { useRouter } from 'next/router';
import Head from 'next/head';
import { FaSignInAlt } from 'react-icons/fa';
// components
import { BREAKPOINTS } from 'utils/breakpoints';
import ComposePost from '@feature/admin/ComposePost';
import DogForm from '@feature/admin/DogForm';
import AdminButton from '@shared/AdminButton';
import Section from '@shared/Section';
import Modal from '@feature/modal/Modal';
// hooks
import useUser from 'hooks/useUser';

const AdminPage = () => {
  const { user } = useUser();

  const router = useRouter();
  const newPost = router.query.nueva_publicacion;
  const newDog = router.query.registrar_ejemplar;

  const openModalPost = () =>
    router.push(`/admin?nueva_publicacion=1`, undefined, { shallow: true });
  const closeModalPost = () =>
    router.replace('/admin', undefined, { shallow: true });

  const openModalDog = () =>
    router.push(`/admin?registrar_ejemplar=1`, undefined, { shallow: true });
  const closeModalDog = () =>
    router.replace('/admin', undefined, { shallow: true });

  const goHome = () => router.push(`/`);

  if (!user) return null;

  return (
    <>
      <Head>
        <title>Administrador | Ovejeros Grubem</title>
      </Head>

      <section>
        <header>
          <div>
            <h1>Administrador</h1>
            <h3>{user.email}</h3>
          </div>
          <button type="button" onClick={goHome}>
            <span> Cerrar sesión</span>
            <i>
              <FaSignInAlt size="2rem" />
            </i>
          </button>
        </header>
        
        <AdminButton onClick={openModalPost} type="post">
          Nueva publicación
        </AdminButton>
        <AdminButton onClick={openModalDog} type="dog">
          Registrar Perro
        </AdminButton>
        <AdminButton onClick={goHome} type="gohome">
          Ir a la pagina
        </AdminButton>
      </section>

      <Modal
        title="Nueva publicación"
        isOpen={newPost}
        closeModal={closeModalPost}
      >
        <ComposePost closeModal={closeModalPost} />
      </Modal>

      <Modal
        title="Registrar ejemplar"
        isOpen={newDog}
        closeModal={closeModalDog}
      >
        <DogForm closeModal={closeModalDog} />
      </Modal>

      <style jsx>{`
        section {
          padding: 3.2rem var(--mobile-padding) 0;
        }
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4rem;
        }
        h1 {
          font-size: 3rem;
          line-height: 3.6rem;
        }
        h3 {
          color: var(--grey-700);
        }

        button {
          display: flex;
          align-items: center;
          padding: 1.2rem;
          border: 1px solid var(--border);
          border-radius: 10rem;
          background: none;
          cursor: pointer;
          outline: none;
        }
        button > i {
          height: 2rem;
        }
        button > span {
          display: none;
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          section {
            padding: 6rem 0 0;
            width: 100%;
            max-width: 60rem;
            margin: 0 auto;
          }
          button {
            height: 3.2rem;
            padding: 0 1.6rem;
            font-weight: 500;
          }
          button > span {
            display: block;
          }
          button > i {
            margin-left: 1.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default AdminPage;
