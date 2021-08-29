import MiniSpinner from '@shared/MiniSpinner';
import { BREAKPOINTS } from 'utils/breakpoints';

const ButtonDefault = ({
  children,
  type = 'button',
  onClick,
  disabled,
  loading,
  width = '100%',
  margin = 0,
  size = 'large',
  variant = 'default',
}) => {
  return (
    <>
      <button
        className={`${variant} ${size} ${loading && 'loading'}`}
        type={type}
        onClick={onClick}
        disabled={loading ? true : disabled}
      >
        {loading ? <MiniSpinner /> : children}
      </button>

      <style jsx>{`
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: ${margin};
          width: ${width};
          font-weight: 600;
          color: var(--black-color);
          text-decoration: none;
          border: 1.8px solid transparent;
          border-radius: var(--normal-radius);
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

        button.loading {
          cursor: wait !important; 
        }

        /*=== BUTTON HEIGHT ===*/
        .small {
          padding: 0 4px;
          height: var(--small-height);            
          font-size: var(--normal-size)};
        }
        .medium {
          padding: 0 8px;
          height: var(--normal-height);
          font-size: var(--normal-size)};
        }
        .large {
          padding: 0 12px;
          height: var(--large-height);
          font-size: var(--large-size);
        }       

        /*=== BUTTON CLASES ===*/     
        button.primary {
          color: var(--white);
          background-color: var(--black);
          border: 1.8px solid var(--black);
        }
        button.primary[disabled] {
          border: 1.8px solid var(--grey-500);
          background-color: var(--grey-500);
        }

        button.secondary {
          color: var(--grey-500);
          border: 1.8px solid var(--grey-300);
        }
        button.secondary:focus {
          box-shadow: 0 0 0 0.16em var(--grey-100);
        }

        button.default {
          background: none;
          border: none;
        }
        button.default:focus {
          box-shadow: 0 0 0 0.1875em var(--grey-100);
        }

        button.danger {
          color: var(--white);
          background-color: var(--error-color);
          border: 1.8px solid var(--error-color);
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
        button:hover {
          border: 1.8px solid var(--grey-500);
        }
        button.primary:hover {
          border: 1.8px solid var(--grey-700);
          background: var(--grey-700);
        }
        button.secondary:hover {
          border: 1.8px solid var(--black);
          color: var(--black);
        }
        button.default:hover {
          border: none;
          background-color: var(--grey-100);
        }
        button.danger:hover {
          color: var(--error-color);
          border: 1.8px solid var(--error-color);
          background: none;
        }

        }
      `}</style>
    </>
  );
};

export default ButtonDefault;
