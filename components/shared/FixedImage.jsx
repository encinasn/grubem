import { BREAKPOINTS } from 'utils/breakpoints';

const FixedImage = ({ background, height = 'max-content', children }) => {
  return (
    <>
      <section>
        <div className="content">{children}</div>
        <div className="opacity"></div>
        <div className="background"></div>
      </section>

      <style jsx>{`
        section {
          position: relative;
          background-color: var(--black);
          min-height: 40vh;
          width: 100vw;
          height: ${height};
          overflow: hidden;
        }
        .content,
        .opacity,
        .background {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
        }
        .content {
          padding: 7.2rem var(--mobile-padding) 0;
          z-index: 3;
        }
        .opacity {
          background-color: var(--black);
          opacity: 0.3;
          z-index: 2;
        }
        .background {
          height: 120%;
          background-image: url(${background ||
          '/images/photos/placeholder.png'});
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          background-position: center 20%;
          z-index: 1;
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          .content {
            padding: 7.2rem var(--desktop-padding) 0;
          }
        }
      `}</style>
    </>
  );
};

export default FixedImage;
