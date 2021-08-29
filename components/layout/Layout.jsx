import { useState } from 'react';
// layout
import Navbar from '@layout/Navbar';
import Footer from '@layout/footer/Footer';
import Menu from './Menu';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const Layout = ({ children }) => {
  const [active, setActive] = useState(false);

  const isMobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 600;
    }
  };

  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <main className={active ? 'active' : ''}>
        {children}
        <Footer />
      </main>
      <Menu />

      <style jsx>{`
        main {
          position: relative;
          right: 0;
          width: 100%;
          min-height: 100vh;
          align-items: center;
          transition: 0.5s;
          z-index: 2;
          background-color: var(--white);
        }
        main.active {
          right: 28rem;
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
        }
      `}</style>
    </>
  );
};

export default Layout;
