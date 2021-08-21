import Image from 'next/image';
import { BREAKPOINTS } from 'utils/breakpoints';
// hook
import useTimeAgo from 'hooks/useTimeAgo';

const Post = ({ post = {} }) => {
  const { createdAt, description, picture } = post;
  const image = '/images/photos/placeholder.png';

  const timeago = useTimeAgo(createdAt);
  return (
    <>
      <li>
        <section className="header">
          <Image
            src="/images/brand/logo.png"
            alt=""
            width={40}
            height={40}
            layout="fixed"
          />
          <div>
            <span>Von der Grubem Land</span>
            <p>{timeago || ''}</p>
          </div>
        </section>

        {description && <p className="content">{description}</p>}

        <section className="image">
          <Image
            src={picture}
            alt=""
            width={800}
            height={800}
            layout="responsive"
            objectFit="cover"
          />
        </section>
        <section className="actions">
          <button>Me gusta</button>
          <button>Compartir</button>
        </section>
      </li>

      <style jsx>{`
        li {
          width: 100%;
          border-bottom: 1px solid var(--border);
          max-width: 70rem;
        }
        .header {
          display: flex;
          align-items: center;
          padding: 0.8rem 1.2rem;
        }

        .header > div {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          margin-left: 1.2rem;
          font-size: 1.4rem;
          font-weight: 500;
        }
        .header > div > p {
          font-size: 1.2rem;
          color: var(--grey-500);
        }

        .content {
          padding: 0 2rem 0.8rem 1.2rem;
          font-size: 1.2rem;
        }

        .image {
          border-top: 1px solid var(--border);
          width: 100%;
          height: auto;
        }

        .actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--border);
        }
        .actions > button {
          width: 100%;
          height: 100%;
          padding: 1.6rem 0;
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
        }
        .actions > button:first-child {
          border-right: 1px solid var(--border);
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          li {
            border-radius: var(--normal-radius);
            margin-bottom: 2rem;
            box-shadow: var(--normal-shadow);
            background: var(--white);
          }
          .header > div {
            font-size: 1.6rem;
          }
          .content {
            font-size: 1.6rem;
          }
          .actions > button:hover {
            background-color: var(--grey-100);
          }
        }
      `}</style>
    </>
  );
};

export default Post;