/* eslint-disable @next/next/no-img-element */
import { memo } from 'react';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const DogImage = ({ url, name }) => {
  return (
    <>
      <li className="picture">
        <img src={url} alt={`Fotografia de ${name}`} />
      </li>

      <style jsx>{`
        .picture {
          width: 100%;
          max-width: 100vw;
          height: max-content;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .picture > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: all 0.6s ease;
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
          .picture {
            min-width: 50rem;
            max-width: 36vw;
          }
        }
      `}</style>
    </>
  );
};

const DogImageMemo = memo((props) => {
  return <DogImage {...props} />;
});

export default DogImageMemo;
