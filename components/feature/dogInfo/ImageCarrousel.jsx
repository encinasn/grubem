import Carrousel from 'react-elastic-carousel';
// components
import DogImage from './DogImage';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const ImageCarrousel = ({ data = ['/images/photos/placeholder.png'], name }) => {

  return (
    <>
      <div className="carrousel_wrapper image">
        <Carrousel
          showArrows={false}
          enableMouseSwipe={false}
          focusOnSelect={true}
        >
          {data.map((imageUrl, index) => (
            <DogImage
              key={`${name}_${index}`}
              url={imageUrl}
              name={`Foto de ${name}`}
            />
          ))}
        </Carrousel>
      </div>

      <style jsx global>{`
        .carrousel_wrapper.image .rec.rec-carousel-item {
          padding-right: 0 !important;
        }
        .carrousel_wrapper.image .rec.rec-carousel-item:first-child {
          padding-left: 0 !important;
        }

        .carrousel_wrapper.image .rec.rec-pagination {
          margin-top: 0.8rem;
        }
        .carrousel_wrapper.image .rec.rec-dot {
          margin: 5px;
          background-color: var(--grey-300);
          height: 0.8rem;
          width: 0.8rem;
          box-shadow: none;
          border-radius: 100rem;
        }
        .carrousel_wrapper.image .rec.rec-dot.rec.rec-dot_active {
          width: 1.6rem;
          background-color: var(--black);
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
        }
      `}</style>
    </>
  );
};

export default ImageCarrousel;
