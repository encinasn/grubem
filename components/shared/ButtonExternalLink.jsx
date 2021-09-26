import { FaExternalLinkAlt } from 'react-icons/fa';
import { BREAKPOINTS } from 'utils/breakpoints';

const ButtonExternalLink = ({
  children,
  disabled,
  path,
  width = '100%',
  margin = 0,
  size = 'large',
  variant = 'default',
}) => {
  return (
    <>
      <a
        className={`${variant} ${size}`}
        disabled={disabled}
        href={path}
        target="_blank"
        rel="noreferrer"
      >
        {children}
        <div className="icon">
          <FaExternalLinkAlt size="1.6rem" />
        </div>
      </a>

      <style jsx>{`
        .icon {
          margin-left: 1.2rem;
          margin-bottom: 2px;
          height: 1.6rem;
        }
        a {
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
        a[disabled] {
          opacity: 0.6;
          cursor: not-allowed;
          pointer-events: none;
        }
        a:focus {
          box-shadow: 0 0 0 0.1875em var(--grey-100);
        }

        a.loading {
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
        a.primary {
          color: var(--white);
          background-color: var(--black);
          border: 1.8px solid var(--black);
        }
        a.primary[disabled] {
          border: 1.8px solid var(--grey-500);
          background-color: var(--grey-500);
        }

        a.red {
          color: var(--white);
          background-color: var(--red);
          border: 1.8px solid var(--red);
        }
        a.red[disabled] {
          border: 1.8px solid var(--grey-500);
          background-color: var(--grey-500);
        }
        a.red:focus  {
          box-shadow: 0 0 0 0.16em #b93b3b1a;
        }

        a.secondary {
          color: var(--grey-500);
          border: 1.8px solid var(--grey-300);
        }
        a.secondary:focus {
          box-shadow: 0 0 0 0.16em var(--grey-100);
        }

        a.default {
          background: none;
          border: none;
        }
        a.default:focus {
          box-shadow: 0 0 0 0.1875em var(--grey-100);
        }

        a.danger {
          color: var(--white);
          background-color: var(--error-color);
          border: 1.8px solid var(--error-color);
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
        a:hover {
          border: 1.8px solid var(--grey-500);
        }
        a.primary:hover {
          border: 1.8px solid var(--grey-700);
          background: var(--grey-700);
        }
        a.red:hover {
          border: 1.8px solid var(--red-700);
          background: var(--red-700);
        }
        a.secondary:hover {
          border: 1.8px solid var(--black);
          color: var(--black);
        }
        a.default:hover {
          border: none;
          background-color: var(--grey-100);
        }
        a.danger:hover {
          color: var(--error-color);
          border: 1.8px solid var(--error-color);
          background: none;
        }

        }
      `}</style>
    </>
  );
};

export default ButtonExternalLink;
