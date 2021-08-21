import { BREAKPOINTS } from 'utils/breakpoints';

const TitleSection = ({ section, children, variant = 'h1' }) => {
  return (
    <>
      <div>
        {section && <h3>{section}</h3>}
        <span className={variant === 'h1' ? 'large' : 'small'} />
        {variant === 'h1' && <h1>{children}</h1>}
        {variant === 'h2' && <h2>{children}</h2>}
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 2rem;
        }

        span {
          border-radius: 10rem;
          background-color: var(--red);
        }
        span.large {
          height: 0.4rem;
          width: 6rem;
          margin: 1.6rem 0 1.2rem;
        }
        span.small {
          height: 0.2rem;
          width: 4rem;
          margin: 1.2rem 0 0.8rem;
        }

        h1 {
          font-size: 4rem;
          font-weight: 600;
          line-height: 5rem;
          color: inherit;
        }

        h2 {
          font-size: 2rem;
          font-weight: 600;
          line-height: 3rem;
          color: inherit;
        }

        h3 {
          text-transform: uppercase;
          font-weight: 500;
          color: var(--red);
          letter-spacing: 0.2rem
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          h1 {
            font-size: 6rem;
            line-height: 7rem;
          }
          h2 {
            font-size: 4rem;
            font-weight: 600;
            line-height: 5rem;
            color: inherit;
          }
        }
      `}</style>
    </>
  );
};

export default TitleSection;
