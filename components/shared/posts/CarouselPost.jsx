import Link from 'next/link';
import Carrousel, { consts } from 'react-elastic-carousel';
// components
import PostCard from './PostCard';
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
    width: 350,
    itemsToShow: 1.1,
  },
  {
    width: 385,
    itemsToShow: 1.3,
  },
  {
    width: 600,
    itemsToShow: 2.3,
    itemsToScroll: 2,
  },
  {
    width: 1000,
    itemsToShow: 2.7,
    itemsToScroll: 2,
  },
  {
    width: 1200,
    itemsToShow: 3.5,
    itemsToScroll: 3,
  },
];

const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 600;
  }
};

const CarrouselPosts = ({ data }) => {
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
          <HiOutlineChevronLeft size="3.8rem" className="arrow-icon"/>
        ) : (
          <HiOutlineChevronRight size="3.8rem" className="arrow-icon"/>
        )}
      </button>
    );
  }

  return (
    <>
      <div className="carrousel_wrapper_posts">
        <Carrousel
          renderArrow={recArrow}
          breakPoints={recBreakPoints}
          pagination={false}
          enableMouseSwipe={false}
          showArrows={!isMobile()}
          focusOnSelect
          itemPosition={consts.START}
          showEmptySlots
          itemPadding={[0, 24, 0, 0]}
        >
          {data.map((post) => (
            <Link href={`/${post.id}`} key={post.id}>
              <a>
                <PostCard
                  picture={post.picture}
                  first_name={post.first_name}
                  dateOfBirth={post.dateOfBirth}
                  gender={post.gender}
                  available={post.available}
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

        .carrousel_wrapper_posts {
          width: 100%;
          padding: 0;
        }
        .rec.rec-slider-container {
          margin: 0;
        }
        .carrousel_wrapper_posts .rec.rec-slider {
          margin: 0 var(--mobile-padding);
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          .carrousel_wrapper_posts .rec.rec-slider {
            margin: 0 var(--desktop-padding);
          }
          .rec.rec-carousel {
            position: relative;
          }

          /* arrow */

          .carrousel_wrapper_posts .rec.rec-arrow,
          .carrousel_wrapper_posts .rec.rec-arrow-right:hover,
          .carrousel_wrapper_posts .rec.rec-arrow-right:hover:enabled,
          .carrousel_wrapper_posts .rec.rec-arrow-right:focus,
          .carrousel_wrapper_posts .rec.rec-arrow-right:focus:enabled,
          .carrousel_wrapper_posts .rec.rec-arrow-left:hover,
          .carrousel_wrapper_posts .rec.rec-arrow-left:hover:enabled,
          .carrousel_wrapper_posts .rec.rec-arrow-left:focus,
          .carrousel_wrapper_posts .rec.rec-arrow-left:focus:enabled {
            background: none;
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
        }
      `}</style>
    </>
  );
};

export default CarrouselPosts;
