/* eslint-disable @next/next/no-img-element */
import { memo } from 'react';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
// hook
import useTimeAgo from 'hooks/useTimeAgo';

const no_op = () => {};

const DogCard = ({
  picture = '/images/photos/landing.jpg',
  name = 'Von der Grubem Land',
  dateOfBirth = 1630163183,
  gender = 'male',
  onClick = no_op,
}) => {

  const dogGender = gender === 'female' ? 'Hembra' : 'Macho'

  const timeago = useTimeAgo(dateOfBirth);
  const age = timeago.replace('hace', '')

  return (
    <>
      <li onClick={onClick}>
        <div className="picture">
          <img src={picture} alt={`Fotografia de ${name}`} />
        </div>

        <div className="info">
          <h3>{name}</h3>
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
          width: 26rem;
          height: max-content;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 4px;
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
            width: 36rem;
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
