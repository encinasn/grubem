// components
import SocialMedia from '@layout/footer/SocialMedia';
import ScrollToSection from './ScrollToSection';
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
          <h4>Von der</h4>
          <h2>Grubem Land</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p> */}
          <ScrollToSection />
        </div>

        <div className="social">
          <SocialMedia />
        </div>
      </section>

      <style jsx>{`
        section {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 100vh;
          padding: 10rem var(--desktop-padding);
        }

        video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
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
          z-index: 10;
        }
        .text h2,
        .text h4 {
          color: #fff;
          text-transform: uppercase;
        }
        .text h2 {
          font-size: 8rem;
          font-weight: 800;
          line-height: 10rem;
        }
        .text h4 {
          font-size: 4rem;
          font-weight: 700;
          line-height: 4rem;
        }
        .text p {
          font-size: 1.1em;
          color: #fff;
          margin: 20px 0;
          font-weight: 400;
          max-width: 700px;
        }

        .social {
          position: absolute;
          z-index: 10;
          bottom: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--white);
        }

        @media (max-width: ${BREAKPOINTS.tab}) {
          section {
            padding: 80% var(--mobile-padding) 10rem;
          }
          .text h2 {
            font-size: 4.2rem;
            line-height: 4.8rem;
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
