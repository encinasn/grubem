// components
import SocialMedia from '@layout/footer/SocialMedia';
import CallToAction from './CallToAction';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const Landing = () => {
  return (
    <>
      <section>
        <div className="picture">
          <img
            src="/images/photos/landing.png"
            alt="Foto de Ovejeros Alemanes"
          />
        </div>

        <div className="overlay"></div>

        <div className="text">
          {/* <h4>Von der grubem land</h4> */}
          <h1>
            Ovejeros
            <br />
            Alemanes
          </h1>
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

        .picture {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 84vh;
          overflow: hidden;
          user-select: none;
        }

        .picture img {
          position: relative;
          top: 0;
          width: 100%;
          height: 120%;
          object-fit: cover;
          object-position: 100% 0;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 84vh;
          background: rgba(0, 0, 0, 0.04);
          /* mix-blend-mode: overlay; */
        }

        .text {
          margin-top: 10%;
          z-index: 10;
        }
        .text h1,
        .text h4 {
          color: var(--white);
          text-transform: uppercase;
          text-shadow: 0 1px 12px rgba(0, 0, 0, 0.2);
        }
        .text h1 {
          font-size: 7rem;
          font-weight: 800;
          line-height: 7.4rem;
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
            display: flex;
            align-items: flex-end;
            justify-content: center;

            padding: 4rem var(--mobile-padding);
            height: 70vh;
          }
          .picture {
            height: 70vh;
          }

          .picture img {
            height: 100%;
            object-position: 70% 50%;
          }
          .overlay {
            height: 70vh;
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

export default Landing;
