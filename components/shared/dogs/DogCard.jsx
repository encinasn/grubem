/* eslint-disable @next/next/no-img-element */
import { memo } from 'react';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
// hook
import useTimeAgo from 'hooks/useTimeAgo';
import Placholder from '@shared/svgs/placeholder';

const no_op = () => {};

const DogCard = ({
  picture,
  first_name = 'Von der Grubem Land',
  dateOfBirth = 1630163183,
  gender = 'male',
  available,
}) => {
  const dogGender = gender === 'female' ? 'Hembra' : 'Macho';

  const timeago = useTimeAgo(dateOfBirth);
  const age = timeago.replace('hace', '');

  return (
    <>
      <li>
        <div className="picture">
          {available && <div>Disponible</div>}
          {picture ? (
            <img
              src={picture}
              alt={`Fotografia de ${first_name}`}
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
          <h3>{first_name}</h3>
          <p>{`${dogGender} • ${age}`}</p>
        </div>
      </li>

      <style jsx>{`
        li {
          margin: 2px;
          cursor: pointer;
        }
        li:last-child {
          margin: 2px 0;
        }

        .picture {
          position: relative;
          width: 26rem;
          height: auto;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 4px;
        }
        .picture > div {
          position: absolute;
          top: 8px;
          right: 8px;

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
        }
        .picture > section > i {
          width: 14rem;
        }

        .info {
          padding: 0.8rem 0;
        }
        .info h3 {
          font-size: 1.6rem;
          font-weight: 700;
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
          li {
            margin: 2px 3.2rem 2px 0;
            cursor: pointer;
          }
          .picture {
            width: 100%;
          }
          .picture > section > i {
            width: 16rem;
          }
        }
      `}</style>
    </>
  );
};

const DogCardMemo = memo((props) => {
  return <DogCard {...props} />;
});

export default DogCardMemo;
