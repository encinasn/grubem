import { useEffect, useState } from 'react';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const showIntro = () => {
  if (typeof window !== 'undefined') {
    const intro = window.sessionStorage.getItem('showIntro');
    console.log(intro);
    return intro ? JSON.parse(intro) : true;
  }
  return true;
};

const Intro = () => {
  const [visible, setVisible] = useState(showIntro());

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        setVisible(false);
        document.body.style.overflowY = 'scroll';
        window.sessionStorage.setItem('showIntro', false);
      }, 6800);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <>
      <video src="/videos/intro.mp4" muted autoPlay></video>

      <style jsx>{`
        video {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          width: 100%;
          height: 100vh;
          object-fit: cover;
          z-index: 200;

          animation: outroOpacity;
          animation-duration: 0.6s;
          animation-delay: 6.2s;
        }

        @keyframes outroOpacity {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
        }
      `}</style>
    </>
  );
};

export default Intro;
