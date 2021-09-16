import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
// components
import ComposePost from '@feature/admin/ComposePost';
import DogForm from '@feature/admin/DogForm';
import Section from '@shared/Section';
import Modal from '@feature/modal/Modal';
// hooks
import useUser from 'hooks/useUser';
import useDarkMode from 'hooks/useDarkMode';

const AdminPage = () => {
  const { user } = useUser();

  const [enabled, setEnabled] = useDarkMode()

  const [newPost, setNewPost] = useState(false);
  const openModalPost = () => setNewPost(true);
  const closeModalPost = () => setNewPost(false);

  const [newDog, setNewDog] = useState(false);
  const openModalDog = () => setNewDog(true);
  const closeModalDog = () => setNewDog(false);

  if (!user) return null;

  return (
    <>
      <Head>
        <title>Administrador | Ovejeros Grubem</title>
      </Head>

      <Section top="7.2rem">
        <h1>{user.email}</h1>
        <button onClick={openModalPost}>Nueva publicacion</button>
        <button onClick={openModalDog}>Registrar Perro</button>
        <Link href="/">
          <a>Ir a la pagina</a>
        </Link>
      </Section>

      <Modal
        title="Crear publicación"
        isOpen={newPost}
        closeModal={closeModalPost}
      >
        <ComposePost closeModal={closeModalPost} />
      </Modal>

      <Modal title="Registrar perro" isOpen={newDog} closeModal={closeModalDog}>
        <DogForm closeModal={closeModalDog} />
      </Modal>
    </>
  );
};

export default AdminPage;
