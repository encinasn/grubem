import Carrousel, { consts } from 'react-elastic-carousel';
// components
import DogImage from './DogImage';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
// icons
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 600;
  }
};

const ImageCarrousel = ({
  data = ['/images/photos/placeholder.png', '/images/photos/placeholder.png'],
  name,
}) => {
  function recArrow({ type, onClick, isEdge }) {
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
        className={`rec rec-arrow ${
          type === consts.PREV ? 'rec-arrow-left ' : 'rec-arrow-right '
        }`}
      >
        {type === consts.PREV ? (
          <HiOutlineChevronLeft size="5rem" />
        ) : (
          <HiOutlineChevronRight size="5rem" />
        )}
      </button>
    );
  }

  return (
    <>
      <div className="carrousel_image">
        <Carrousel
          renderArrow={recArrow}
          showArrows={!isMobile()}
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
        .carrousel_image .rec.rec-carousel-item {
          padding-right: 0 !important;
        }
        .carrousel_image .rec.rec-carousel-item:first-child {
          padding-left: 0 !important;
        }

        .carrousel_image .rec.rec-pagination {
          margin-top: 0.8rem;
        }
        .carrousel_image .rec.rec-dot {
          margin: 5px;
          background-color: var(--grey-300);
          height: 0.8rem;
          width: 0.8rem;
          box-shadow: none;
          border-radius: 100rem;
        }
        .carrousel_image .rec.rec-dot.rec.rec-dot_active {
          width: 1.6rem;
          background-color: var(--black);
        }

        .carrousel_image .rec.rec-slider-container {
          margin: 0;
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          .carrousel_image {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #000000;

            aspect-ratio: 4 / 3;
            height: 100vh;
            width: auto;
          }

          .carrousel_image .rec.rec-carousel-wrapper {
            position: relative;
          }

          .carrousel_image .rec.rec-pagination {
            position: absolute;
            bottom: 10px;
          }
          .carrousel_image .rec.rec-dot {
            filter: drop-shadow(0 1px 10px #000000);
          }
          .carrousel_image .rec.rec-dot.rec.rec-dot_active {
            background-color: var(--white);
          }
          /* arrow */

          .carrousel_image .rec.rec-arrow {
            visibility: visible;
            position: absolute;
            width: 6rem;
            height: 100%;
            border: none;
            background: none;
            color: var(--white);
            cursor: pointer;
            z-index: 10;

            filter: drop-shadow(0 1px 10px #000000);
          }
          .carrousel_image .rec.rec-arrow[disabled] {
            visibility: hidden;
          }
          .carrousel_image .rec.rec-arrow-left {
            left: 0;
          }
          .carrousel_image .rec.rec-arrow-right {
            right: 0;
          }
          .carrousel_image .rec.rec-arrow:hover,
          .carrousel_image .rec.rec-arrow:hover:enabled,
          .carrousel_image .rec.rec-arrow:focus,
          .carrousel_image .rec.rec-arrow:focus:enabled {
            color: var(--white);
          }
          .carrousel_image .rec.rec-arrow-left:hover,
          .carrousel_image .rec.rec-arrow-left:hover:enabled,
          .carrousel_image .rec.rec-arrow-left:focus,
          .carrousel_image .rec.rec-arrow-left:focus:enabled {
            background: none;
          }
          .carrousel_image .rec.rec-arrow-right:hover,
          .carrousel_image .rec.rec-arrow-right:hover:enabled,
          .carrousel_image .rec.rec-arrow-right:focus,
          .carrousel_image .rec.rec-arrow-right:focus:enabled {
            background: none;
          }
        }
      `}</style>
    </>
  );
};

export default ImageCarrousel;
