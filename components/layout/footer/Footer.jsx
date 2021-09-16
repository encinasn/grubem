import SocialMedia from './SocialMedia';
import { BREAKPOINTS } from 'utils/breakpoints';

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <section>Copyright © 2021 - Von Der GRubEm Land</section>
          <SocialMedia />
        </div>
      </footer>

      <style jsx>{`
        footer {
          right: 0;
          width: 100vw;
          padding: 2rem 0;
          background-color: var(--background);
          z-index: 2;
        }

        div {
          display: grid;
          grid-template: 1fr 1fr / auto;
          align-items: center;
          justify-content: center;
          padding: 1.2rem;
          border-top: 1px solid var(--border);
        }

        section {
          font-size: 1.4rem;
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          footer {
            padding: 0 10%;
            padding-bottom: 2rem;
          }
          div {
            grid-template: auto / 1fr auto;
            padding: 1.2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
