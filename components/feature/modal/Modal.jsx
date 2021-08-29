import { createPortal } from 'react-dom';
// icons
import { FaTimes } from 'react-icons/fa';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
// hooks
//import useLockBodyScroll from 'hooks/useLockBodyScroll';

const ModalWrapper = ({
  closeModal,
  children,
  title,
  width = '36vw',
  height = '80vh',
}) => {
  //useLockBodyScroll()

  return (
    <>
      <div className="modal__wrapper">
        <div className="modal__background" onClick={closeModal} />
        <div className="modal__content">
          <header>
            <h2>{title}</h2>
            <div className="modal__close" onClick={closeModal}>
              <FaTimes size="1.6rem"/>
            </div>
          </header>
          {children}
        </div>
      </div>

      <style jsx global>{`
        .modal__wrapper {
          overflow: hidden;
        }

        .modal__background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 200;
          background: rgba(0, 0, 0, 0.4);
          animation: introOpacity;
          animation-duration: 0.3s;
        }

        header {
          position: relative;
          width: 100%;
          padding: 1.2rem;
          border-bottom: 1px solid var(--border);
        }

        @keyframes introOpacity {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal__content {
          position: fixed;
          bottom: 0;
          right: 0;
          left: 0;

          max-height: calc(${height} + 10vh);
          width: 100%;
          height: 100%;
          padding-bottom: 0;
          z-index: 200;
          background-color: var(--white);
          border-radius: var(--large-radius) var(--large-radius) 0 0;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;

          animation: slideIn;
          animation-duration: 0.2s;
          animation-timing-function: ease;
        }

        @keyframes slideIn {
          from {
            bottom: -60%;
            opacity: 0;
          }
          to {
            bottom: 0;
            opacity: 1;
          }
        }

        .modal__close {
          position: absolute;
          top: 50%;
          right: 0.8rem;

          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.8rem;
          width: 2.8rem;
          background: none;
          border-radius: 50%;
          cursor: pointer;
          z-index: 220;
          transform: translateY(-50%);
        }
        .modal__close:hover {
          background-color: rgb(0, 0, 0, 0.05);
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
          .modal__wrapper {
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
            z-index: 200;
          }
          .modal__background {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 200;
            width: 100%;
            height: 100%;
          }
          .modal__content {
            position: relative;
            max-height: ${height};
            max-width: ${width};
            overflow: auto;
            box-shadow: var(--modal-shadow);
            border-radius: var(--large-radius);
          }
        }
      `}</style>
    </>
  );
};

const Modal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return createPortal(
    <ModalWrapper {...props} />,
    document.getElementById('modal')
  );
};

export default Modal;
