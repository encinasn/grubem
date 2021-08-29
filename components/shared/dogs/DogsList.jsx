// components
import DogItem from '@shared/dogs/DogItem';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const hold = [1, 2, 3, 4, 5, 6, 7, 8.9];

const DogsList = () => {
  return (
    <>
      <ul>
        {hold.map((dog) => (
          <DogItem key={dog.id} gender="male" />
        ))}
      </ul>

      <style jsx>{`
        ul {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: ${BREAKPOINTS.tab}) {
          ul {
            display: grid;
            grid-gap: 2rem;
            grid-template-columns: repeat(2, minmax(32rem, 1fr));
            margin-bottom: 2rem;
          }
        }
        @media (min-width: ${BREAKPOINTS.desktop}) {
          ul {
            grid-template-columns: repeat(3, minmax(32rem, 1fr));
          }
        }
      `}</style>
    </>
  );
};

export default DogsList;
