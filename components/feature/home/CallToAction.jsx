// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const ScrollToSection = ({children}) => {
  const handleClick = () => {
    window.scroll({
      top: window.innerHeight - 72,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button onClick={handleClick}>{children}</button>

      <style jsx>{`
        button {
          display: inline-block;
          font-size: 1em;
          background: var(--red);
          padding: 1rem 3rem;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
          margin-top: 1.6rem;
          color: var(--white);
          letter-spacing: 3px;
          transition: 0.2s;
          border-radius: var(--normal-radius);
          outline: none;
          border: none;
          cursor: pointer;
        }
        button:hover {
          letter-spacing: 6px;
        }
        @media (max-width: ${BREAKPOINTS.tab}) {
          button {
            font-size: 1.2rem;
            padding: 0.8rem 2rem;
            letter-spacing: 2px;
          }
        }
      `}</style>
    </>
  );
};

export default ScrollToSection;
