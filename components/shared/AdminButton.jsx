import { BREAKPOINTS } from 'utils/breakpoints';
import { FaDog, FaSignInAlt } from 'react-icons/fa';
import { HiNewspaper } from 'react-icons/hi';
import { MdViewDay } from 'react-icons/md';

const ButtonDefault = ({
  children,
  type,
  onClick,
  disabled,
  width = '100%',
  margin = '2rem 0 0 0',
  variant,
}) => {
  return (
    <>
      <button
        className={`${variant}`}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        <span className="icon">
          {type === 'post' && <HiNewspaper size="2.4rem" />}
          {type === 'dog' && <FaDog size="2.4rem" />}
          {type === 'gohome' && <MdViewDay size="2.4rem" />}
          {type === 'logout' && <FaSignInAlt size="2.4rem" />}
        </span>
        {children}
      </button>

      <style jsx>{`
        .icon {
          height: 2.4rem;
          margin-right: 1.2rem;
          color: var(--red);
        }
        button {
          display: flex;
          justify-content: center;
          align-items: center;

          margin: ${margin};
          padding: 0 12px;
          width: ${width};
          height: 5.6rem;

          font-size: var(--large-size);
          font-weight: 600;
          text-decoration: none;
          border: 2px solid var(--border);
          border-radius: var(--large-radius);
          background: none;
          outline: none;
          cursor: pointer;
          user-select: none;
          transition: 0.2s;
        }
        button[disabled] {
          opacity: 0.6;
          cursor: not-allowed;
          pointer-events: none;
        }
        button:focus {
          box-shadow: 0 0 0 0.1875em var(--grey-100);
        }

        /*=== BUTTON CLASES ===*/
        button.red {
          border: 1.8px solid var(--red);
        }
        button.red[disabled] {
          border: 1.8px solid var(--grey-500);
          background-color: var(--grey-500);
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
      
          button:hover {
            border: 1.8px solid var(--grey-500);
          }
          button.red:hover {
            border: 1.8px solid var(--red);
            background: var(--grey-100);
          }
        }
      `}</style>
    </>
  );
};

export default ButtonDefault;
