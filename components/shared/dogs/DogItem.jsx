/* eslint-disable @next/next/no-img-element */
// icons
import { IoMdMale, IoMdFemale } from 'react-icons/io';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const DogItem = ({
  name = 'Von der Grubem Land',
  picture = '/images/photos/placeholder.png',
  gender,
  dateOfBirth,
  selection,
  femaleParent,
  maleParent,
  elbowPlate,
  hipPlate,
  pedegreeUrl,
}) => {
  return (
    <>
      <li>
        <img src={picture} alt={`Fotografia de ${name}`} />
        <div>
          <div>
            <h4>{name}</h4>
            {gender === 'male' && <IoMdMale size="1.6rem" />}
            {gender === 'female' && <IoMdFemale size="1.6rem" />}
          </div>
          <span>Edad: {dateOfBirth}</span>
          <span>Seleccion: {selection}</span>
          <span>Madre: {femaleParent}</span>
          <span>Padre: {maleParent}</span>
        </div>
      </li>

      <style jsx>{`
        li {
          display: grid;
          grid-template: auto / auto 1fr;
          height: 12rem;
          width: 100%;
          border: 1px solid var(--border);
          border-radius: var(--normal-radius);
          overflow: hidden;
          margin-bottom: 1.6rem;
          cursor: pointer;
        }

        img {
          height: 100%;
          width: 12rem;
          object-fit: cover;
          object-position: center;
        }
        li > div {
          padding: 1.2rem;
        }
        li > div > div {
          display: grid;
          align-items: center;
          grid-template-columns: 1fr auto;
        }

        span {
          display: block;
          font-size: 1.2rem;
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
          li {
            display: grid;
            grid-template: auto 1fr / auto;
            height: 40rem;
            margin: 0;
          }
          img {
              aspect-ratio: 4/3
            height: auto;
            width: 100%;
            overflow: hidden;
          }
        }
      `}</style>
    </>
  );
};

export default DogItem;
