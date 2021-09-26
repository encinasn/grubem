import Link from 'next/link';
import Carrousel, { consts } from 'react-elastic-carousel';
// components
import DogCard from './DogCard';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
// icons
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const recBreakPoints = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 320,
    itemsToShow: 1.2,
  },
  {
    width: 350,
    itemsToShow: 1.3,
  },
  {
    width: 385,
    itemsToShow: 1.4,
  },
  {
    width: 600,
    itemsToShow: 2.3,
    itemsToScroll: 2,
  },
  {
    width: 1000,
    itemsToShow: 3.7,
    itemsToScroll: 3,
  },
  {
    width: 1200,
    itemsToShow: 4.7,
    itemsToScroll: 4,
  },
];

const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 600;
  }
};

const CarrouselDogs = ({ data }) => {
  // const modal = !!router.query[`${type}_id`];

  // const openModal = (id) => router.push(`/${id}`, undefined, { scroll: false });
  // const closeModal = () => router.replace('/', undefined, { scroll: false });

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
          <HiOutlineChevronLeft size="3.8rem" className="arrow-icon" />
        ) : (
          <HiOutlineChevronRight size="3.8rem" className="arrow-icon" />
        )}
      </button>
    );
  }

  return (
    <>
      <div className="carrousel_wrapper">
        <Carrousel
          renderArrow={recArrow}
          breakPoints={recBreakPoints}
          pagination={false}
          enableMouseSwipe={false}
          showArrows={!isMobile()}
          focusOnSelect
          itemPadding={[0, 24, 0, 0]}
          itemPosition={consts.START}
        >
          {data.map((dog) => (
            <Link href={`/${dog.id}`} key={dog.id}>
              <a>
                <DogCard
                  picture={dog.picture}
                  first_name={dog.first_name}
                  dateOfBirth={dog.dateOfBirth}
                  gender={dog.gender}
                  available={dog.available}
                />
              </a>
            </Link>
          ))}
          {!isMobile() && <div></div>}
        </Carrousel>
      </div>

      <style jsx global>{`
        a {
          width: 100%;
        }

        .carrousel_wrapper {
          width: 100%;
          padding: 0;
        }
        .carrousel_wrapper .rec.rec-slider-container {
          margin: 0;
        }
        .carrousel_wrapper .rec.rec-slider {
          margin: 0 var(--mobile-padding);
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          .carrousel_wrapper .rec.rec-slider {
            margin: 0 var(--desktop-padding);
          }
          .carrousel_wrapper .rec.rec-carousel {
            position: relative;
          }

          /* arrow */

          .rec.rec-arrow {
            visibility: visible;
            position: absolute;
            width: var(--desktop-padding);
            height: 100%;
            border: none;
            background: var(--background);
            color: var(--arrow-slider-color);
            cursor: pointer;
            z-index: 10;
          }
          .rec.rec-arrow[disabled] {
            visibility: hidden;
          }
          .rec.rec-arrow-left {
            left: 0;
            background: var(--arrow-slider-left);
          }
          .rec.rec-arrow-right {
            right: 0;
            background: var(--arrow-slider-right);
          }
          .rec.rec-arrow:hover,
          .rec.rec-arrow:hover:enabled,
          .rec.rec-arrow:focus,
          .rec.rec-arrow:focus:enabled {
            color: var(--arrow-slider-color);
          }
          .rec.rec-arrow-left:hover,
          .rec.rec-arrow-left:hover:enabled,
          .rec.rec-arrow-left:focus,
          .rec.rec-arrow-left:focus:enabled {
            background: var(--arrow-slider-left);
          }
          .rec.rec-arrow-right:hover,
          .rec.rec-arrow-right:hover:enabled,
          .rec.rec-arrow-right:focus,
          .rec.rec-arrow-right:focus:enabled {
            background: var(--arrow-slider-right);
          }

          .rec.rec-arrow > .arrow-icon {
            transition: transform 0.3s linear;
          }
          .rec.rec-arrow:hover > .arrow-icon,
          .rec.rec-arrow:hover:enabled > .arrow-icon,
          .rec.rec-arrow:focus > .arrow-icon,
          .rec.rec-arrow:focus:enabled > .arrow-icon {
            transform: scale(1.3);
          }
        }
      `}</style>
    </>
  );
};

export default CarrouselDogs;
