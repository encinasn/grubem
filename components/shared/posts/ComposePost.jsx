import { useState } from 'react';
// components
import Image from 'next/image';
import Textarea from '@shared/posts/TextareaPosts';
import FileIcon from '@shared/posts/FileIcon';
import PostImage from '@shared/posts/PostImage';
import Button from '@shared/Button';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
// hooks
import usePosts from 'hooks/usePosts';
import useUploadFile from 'hooks/useUploadFile';

const ComposePost = () => {
  const [content, setContent] = useState('');

  const {
    imgUrl,
    loading: imgLoading,
    upload,
    deleteImg,
  } = useUploadFile();

  const { createPost, loading, error } = usePosts();

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ description: content, picture: imgUrl });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Crear publicación</h1>
        <section className="header">
          <Image
            src="/images/brand/logo.png"
            alt=""
            width={40}
            height={40}
            layout="fixed"
          />
          <span>Von der Grubem Land</span>
        </section>

        <Textarea
          placeholder="Contenido de la publicación"
          onChange={setContent}
          onDrop={upload}
          value={content}
          disabled={loading.create}
        />

        {imgUrl && <PostImage imgUrl={imgUrl} onChange={deleteImg} />}

        <section className="add-to-post">
          <span>Añadir a la publicación</span>
          <FileIcon
            name="picture"
            onChange={upload}
            disabled={loading.create}
          />
        </section>

        <Button
          type="submit"
          variant="primary"
          margin="1.6rem 0 0 0"
          disabled={!content}
          loading={loading.create}
        >
          Publicar
        </Button>
      </form>

      <style jsx>{`
        form {
          width: 100%;
          max-width: 70rem;
        }

        h1 {
          margin-bottom: 20px;
          font-size: 2.4rem;
        }

        span {
          font-size: 1.4rem;
          font-weight: 500;
        }

        .header {
          display: flex;
          align-items: center;
          padding: 0.8rem 1.2rem;
        }
        .header > span {
          margin-left: 1.2rem;
        }

        .add-to-post {
          display: grid;
          align-items: center;
          grid-template: auto / 1fr auto auto;
          padding: 0.4rem 1.2rem;
          width: 100%;
          border: 1px solid var(--border);
          border-radius: var(--normal-radius);
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          form {
            padding: 2.8rem 2rem;
            border-radius: var(--normal-radius);
            margin-bottom: 2rem;
            box-shadow: var(--normal-shadow);
            background: var(--white);
          }
          .header > div {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default ComposePost;
