import FixedImage from '@shared/FixedImage';
import IconItem from '@shared/IconItem';
import ScrollTo from '@shared/ScrollTo';
import TitleSection from '@shared/TitleSection';
import SocialMedia from '@layout/footer/SocialMedia';
import { BREAKPOINTS } from 'utils/breakpoints';

const Landing = () => {
  return (
    <>
      <FixedImage background="/images/photos/landing.jpg" height="100vh">
        <header>
          <TitleSection>
            Ovejeros Alemanes <br /> De Raza Pura
          </TitleSection>
          <div>
            <ScrollTo />
          </div>
        </header>
        <footer>
          <IconItem icon="location" title="San Luis, Argentina" />
          <SocialMedia />
        </footer>
      </FixedImage>

      <style jsx>{`
        header {
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          height: calc(100vh - 7.2rem * 2);
          color: var(--white);
        }
        header > div {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 2rem;
        }

        footer {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          padding: 1.2rem 0;
          border-top: 1px solid var(--border-black);
          color: var(--white);
          font-size: 1.4rem;
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          header > div {
            justify-content: flex-start;
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Landing;
