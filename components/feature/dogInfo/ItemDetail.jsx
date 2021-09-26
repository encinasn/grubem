import { BREAKPOINTS } from 'utils/breakpoints';

const ItemDetail = ({ title, children, first }) => {
  if (!children) return null;

  return (
    <>
      <div className={first ? 'first' : ''}>
        <p>{title}</p>
        <p>{children}</p>
      </div>

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 0;
          border-top: 1px solid var(--border);
        }
        div.first {
          border-top: none;
        }

        p:last-child {
          font-weight: 600;
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
          div {
            padding: 1.6rem 0;
          }
          p {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default ItemDetail;
