import { useState } from 'react';
// components
import Image from 'next/image';
import Textarea from '@shared/posts/TextareaPosts';
import FileIcon from '@shared/FileIcon';
import PostImage from '@shared/posts/PostImage';
import Button from '@shared/Button';
import Separator from '@shared/Separator';
import DropImage from '@shared/DropImage';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
// hooks
import usePosts from 'hooks/usePosts';
import useUploadFile from 'hooks/useUploadFile';

const ComposePost = ({ closeModal }) => {
  const [content, setContent] = useState('');

  const date = new Date();
  const {
    filesUrl,
    coverUrl,
    loading: imgLoading,
    uploadCover,
    deleteCover,
    upload,
    deleteFile,
  } = useUploadFile('posts', date.toDateString());

  const { createPost, loading, error } = usePosts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ description: content, picture: filesUrl });
    if (!error.create) closeModal();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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

        <Separator />

        {coverUrl.length > 0 &&
          coverUrl.map((img) => (
            <PostImage imgUrl={img} onChange={deleteCover} key={img} />
          ))}

        <section className="add-to-post">
          <span>Portada de la publicación</span>
          <FileIcon
            name="cover"
            onChange={uploadCover}
            disabled={loading.create}
          />
        </section>

        <DropImage
          label="Imagenes"
          name="picture"
          files={filesUrl}
          onChange={upload}
          deleteFile={deleteFile}
          loading={imgLoading.images}
        />

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
          padding: 1.6rem;
        }

        span {
          font-size: 1.4rem;
          font-weight: 500;
        }

        .header {
          display: flex;
          align-items: center;
          padding: 0.8rem;
        }
        .header > span {
          margin-left: 1.2rem;
        }

        .add-to-post {
          display: grid;
          align-items: center;
          grid-template: auto / 1fr auto auto;
          padding: 0.4rem 1.2rem;
          margin-bottom: 0.8rem;
          width: 100%;
          border: 1px solid var(--border);
          border-radius: var(--normal-radius);
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          .header > div {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default ComposePost;
