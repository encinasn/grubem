// components
import SocialMedia from '@layout/footer/SocialMedia';
import CallToAction from './CallToAction';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const LandingVideo = () => {
  return (
    <>
      <section>
        <video
          src="/videos/landing.mp4"
          muted
          autoPlay
          // poster="" imagen que se muestra si el video no se esta reproduciendo
        ></video>

        <div className="overlay"></div>

        <div className="text">
          <h4>Von der grubem land</h4>
          <h1>Ovejeros Alemanes</h1>
          <CallToAction>ver mas</CallToAction>
          {/* <h1 className="hidden-h1">Ovejeros Alemanes</h1> */}
        </div>
      </section>

      <style jsx>{`
        section {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 84vh;
          padding: 10rem var(--desktop-padding);
        }

        .hidden-h1 {
          user-select: none;
          opacity: 0;
        }

        video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 105vh;
          object-fit: cover;
          opacity: 0.8;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #777777;
          mix-blend-mode: overlay;
        }

        .text {
          margin-top: 20%;
          z-index: 10;
        }
        .text h1,
        .text h4 {
          color: var(--white);
          text-transform: uppercase;
          text-shadow: 0 1px 12px rgba(0, 0, 0, 0.2);
        }
        .text h1 {
          font-size: 6rem;
          font-weight: 800;
          line-height: 7rem;
        }
        .text h4 {
          font-size: 3rem;
          font-weight: 700;
          line-height: 4rem;
        }
        .text p {
          font-size: 1.1em;
          color: var(--white);
          margin: 20px 0;
          font-weight: 400;
          max-width: 700px;
        }

        @media (max-width: ${BREAKPOINTS.tab}) {
          section {
            padding: 60% var(--mobile-padding) 4rem;
            height: 60vh;
          }
          video {
            height: 75vh;
          }
          .overlay {
            height: 75vh;
          }
          .text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .text h1 {
            font-size: 4rem;
            line-height: 4.4rem;
          }
          .text h4 {
            font-size: 2rem;
            line-height: 3rem;
          }
        }
      `}</style>
    </>
  );
};

export default LandingVideo;
