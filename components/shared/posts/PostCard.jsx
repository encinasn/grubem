/* eslint-disable @next/next/no-img-element */
import { memo } from 'react';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
// hook
import useTimeAgo from 'hooks/useTimeAgo';
import Placholder from '@shared/svgs/placeholder';

const PostCard = ({
  poster,
  title = 'Titulo de la publicacion ejemplo',
  createdAt = 1630163183,
  category = 'Preñez',
}) => {
  const timeago = useTimeAgo(createdAt);

  return (
    <>
      <li>
        <div className="picture">
          {poster ? (
            <img
              src={poster}
              alt={`Portada de la publicacion ${title}`}
              loading="lazy"
            />
          ) : (
            <section>
              <i>
                <Placholder fill="#fafafa" className="placeholder" />
              </i>
            </section>
          )}
        </div>

        <div className="info">
          <h3>{title}</h3>
          <p>{timeago}</p>
        </div>
      </li>

      <style jsx>{`
        li {
          display: grid;
          grid-template-columns: auto 1fr;
          cursor: pointer;
          padding-bottom: 1.2rem;
          overflow: hidden;
        }
        li:last-child {
          margin: 2px 0;
        }

        .picture {
          position: relative;
          width: 10rem;
          height: auto;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 4px;
        }
        .picture > div {
          position: absolute;
          top: 8px;

          color: var(--white);
          font-size: 1.2rem;
          padding: 0.4rem 0.8rem;
          border-radius: var(--normal-radius);
          background-color: var(--red);
          text-transform: uppercase;
          opacity: 0.9;
          z-index: 8;
        }
        .picture > img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          object-fit: cover;
          object-position: center;
          transition: all 0.6s ease;
        }
        .picture:hover > img {
          transform: scale(1.15);
        }

        .picture > section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background-color: var(--grey-500);
          padding: 1.2rem;
        }
        .picture > section > i {
          width: 100%;
        }

        .info {
          width: 18rem;
          padding-left: 1.2rem;
          color: var(--font);
        }
        .info h3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          width: 100%;

          font-size: 1.8rem;
          font-weight: 700;
          line-height: 2rem;
        }
        .info p {
          margin-top: 0.2rem;
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
          .picture {
            width: 12rem;
          }
          .info {
            width: calc(100% - 2rem);
          }
          .info h3 {
            font-size: 2rem;
            font-weight: 700;
            line-height: 2.4rem;
          }
          .info p {
            margin-top: 0.6rem;
          }
        }
      `}</style>
    </>
  );
};

const PostCardMemo = memo((props) => {
  return <PostCard {...props} />;
});

export default PostCardMemo;
