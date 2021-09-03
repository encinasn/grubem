import { useState } from 'react';
import { useRouter } from 'next/router';
import Carrousel from 'react-elastic-carousel';
// components
import DogCard from '../../shared/dogs/DogCard';
import Modal from '@feature/modal/ModalDogInfo';
import DogInfo from '@feature/dogInfo/DogInfo';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const recBreakPoints = [
  {
    width: 320,
    itemsToShow: 1.3,
  },
  {
    width: 370,
    itemsToShow: 1.4,
  },
  {
    width: 600,
    itemsToShow: 2.5,
    itemsToScroll: 1,
  },
  {
    width: 1000,
    itemsToShow: 3,
    itemsToScroll: 2,
  },
  {
    width: 1200,
    itemsToShow: 3.22,
    itemsToScroll: 2,
  },
];

const CarrouselDogs = ({ data, type }) => {
  const [modalData, setModalData] = useState(false);

  const router = useRouter();
  const modal = !!router.query[`${type}_id`];

  const openModal = (id) =>
    router.push(`/?${type}_id=${id}`, undefined, { shallow: true });
  const closeModal = () => router.push('/', undefined, { shallow: true });

  const handleClick = (dog) => {
    setModalData(dog)
    openModal(dog.id);
  };

  const isMobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 600;
    }
  };

  return (
    <>
      <div className="carrousel_wrapper">
        <Carrousel
          breakPoints={recBreakPoints}
          transitionMs={400}
          pagination={false}
          enableMouseSwipe={false}
          showArrows={!isMobile()}
          focusOnSelect={true}
        >
          {data.map((dog) => (
            <DogCard
              key={dog.id}
              name={dog.name}
              dateOfBirth={dog.dateOfBirth}
              gender={dog.gender}
              onClick={() => handleClick(dog)}
            />
          ))}
        </Carrousel>
      </div>

      <Modal title="" isOpen={modal} closeModal={closeModal}>
        <DogInfo data={modalData} />
      </Modal>

      <style jsx global>{`
        .carrousel_wrapper {
          width: 100%;
          background-color: var(--white);
          padding: 0;
        }
        .rec.rec-slider-container {
          margin: 0;
        }

        .rec.rec-arrow {
          border-radius: 0;
          border: none;
          background-color: var(--white);
          box-shadow: none;
          margin: 0 2rem;
        }
        .rec.rec-arrow:hover,
        .rec.rec-arrow:hover:enabled,
        .rec.rec-arrow:focus,
        .rec.rec-arrow:focus:enabled {
          border-radius: 50%;
          box-shadow: none;
          border: none;
          background-color: var(--grey-300);
          color: var(--black);
        }

        .rec.rec-item-wrapper {
          width: max-content !important;
        }
        .rec.rec-carousel-item {
          padding-right: 2rem !important;
        }
        .rec.rec-carousel-item:first-child {
          padding-left: 2rem !important;
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          .carrousel_wrapper {
            padding: 0 calc(var(--desktop-padding) - 9rem);
          }
          .rec.rec-carousel-item:first-child {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </>
  );
};

export default CarrouselDogs;
