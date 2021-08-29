import { createPortal } from 'react-dom';
// utils
import { breakpoints } from '@utils/breakpoints';
// hooks
import useLockBodyScroll from 'hooks/useLockBodyScroll';

const WarningWrapper = ({
  message,
  warning = true,
  firstButton,
  firstAction,
  secondButton,
  secondAction,
}) => {
  useLockBodyScroll();

  return (
    <>
      <div className="warning__wrapper">
        <div className="warning__background" onClick={secondAction} />
        <div className="warning__content card">
          <section>
            <h3>{message}</h3>
            {warning && <span>Esta acción no se puede deshacer</span>}
          </section>

          <footer>
            <button type="button" className="danger" onClick={firstAction}>
              {firstButton}
            </button>
            <button type="button" onClick={secondAction}>{secondButton}</button>
          </footer>
        </div>
      </div>

      <style jsx>{`
        .warning__wrapper {
          position: fixed;
          top: 0;
          left: 0;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100vh;
          width: 100vw;
          overflow: auto;
          user-select: none;
          z-index: 300;
        }
        .warning__background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
        }
        .warning__content {
          position: relative;
          overflow: hidden;
          box-shadow: var(--card-shadow);
          bottom: 0;
          right: 0;
          left: 0;
          width: 100%;
          max-width: 60vw;
          padding-bottom: 0;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          aspect-ratio: 3 / 4;
        }

        .warning__content section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: calc(100% - (5rem * 2));
          padding: 2rem 3rem;
          font-size: var(--xlarge-font-size);
          text-align: center;
        }
        .warning__content section > span {
          margin-top: 2rem;
          color: var(--dark-gray);
          font-size: var(--normal-font-size);
          text-align: center;
        }

        .warning__content footer {
          display: grid;
          grid-template: 1fr 1fr / 1fr;
        }

        button {
          height: 5rem;
          width: 100%;
          padding: 8px;
          font-size: var(--large-font-size);
          background: none;
          border: none;
          border-top: 1px solid var(--mid-gray);
          outline: none;
          cursor: pointer;
        }

        button:hover {
          background: var(--light-gray);
        }

        .danger {
          color: var(--error-color);
          font-weight: 700;
        }

        @media (min-width: ${breakpoints.tab}) {
          .warning__content {
            max-width: 20vw;
            aspect-ratio: 4 / 3;
          }
          .warning__content section {
            height: calc(100% - 5.8rem);
          }
          .warning__content footer {
            grid-template: auto / 1fr 1fr;
          }
          button {
            height: 5.8rem;
          }
          .danger {
            border-left: 1px solid var(--mid-gray);
            order: 2;
          }
        }
      `}</style>
    </>
  );
};

const Warning = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return createPortal(
    <WarningWrapper
      title={props.title}
      message={props.message}
      firstButton={props.firstButton}
      firstAction={props.firstAction}
      secondAction={props.secondAction}
      secondButton={props.secondButton}
    />,
    document.getElementById('popup')
  );
};

export default Warning;
