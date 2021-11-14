import Image from 'next/image';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const Logo = ({ height = 80 }) => {
  return (
    <>
      <div className="wrapper">
        <Image
          src="/images/brand/logo.png"
          alt="Escudo de Von der Grubem Land"
          width={height}
          height={height}
          layout="fixed"
          priority
        />
        <div>
          <span>Von der </span>
          <span className="big">Grubem Land </span>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: center;
        }

        .wrapper > div {
          display: flex;
          flex-direction: column;
          margin-left: 0.8rem;
          margin-top: 6px;
        }
        span {
          color: var(--white);
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1.6rem;
        }
        span.big {
          font-size: 2.2rem;
          line-height: 2.8rem;
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
          .wrapper > div {
            margin-top: 4px;
            margin-left: 1.2rem;
          }
          span {
            font-size: 1.6rem;
            line-height: 2rem;
          }
          span.big {
            font-size: 2.8rem;
            line-height: 3.4rem;
          }
        }
      `}</style>
    </>
  );
};

export default Logo;
