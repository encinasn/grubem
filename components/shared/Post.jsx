import Image from 'next/image';

const Post = ({ post = {} }) => {
  const { timeago, description } = post;
  const image = '/images/brand/logo.png';
  return (
    <>
      <li>
        <section className="header">
          <Image
            src="/images/brand/logo.png"
            responsive="true"
            alt=""
            width={40}
            height={40}
          />
          <div>
            <span>Von der Grubem Land</span>
            <p>{timeago || ''}</p>
          </div>
        </section>

        {description && <p className="content">{description}</p>}

        <section className="image">
          <Image
            src={image}
            responsive="true"
            alt=""
            width={800}
            height={800}
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
        }
        .actions > button:first-child {
          border-right: 1px solid var(--border);
        }
      `}</style>
    </>
  );
};

export default Post;
