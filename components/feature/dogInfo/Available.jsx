import { HiBadgeCheck } from 'react-icons/hi';
import { BREAKPOINTS } from 'utils/breakpoints';

const Available = ({ value }) => {
  if (!value) return null;

  return (
    <>
      <div>
        <p>Esta disponible</p>
        <span>
          <HiBadgeCheck size="2.4rem" />
        </span>
      </div>

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 1.6rem;
          border: 1px solid var(--border);
          border-radius: var(--normal-radius);
          margin: 1.6rem 0 1.2rem;
        }

        p {
          font-weight: 600;
        }

        span {
          height: 2.4rem;
          color: var(--red);
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
          div {
            padding: 1.6rem 2rem;
          }
          p {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default Available;
