// layout
import Navbar from '@layout/Navbar';
import NavbarMobile from '@layout/NavbarMobile';
import Footer from '@layout/footer/Footer';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 600;
  }
};

const Layout = ({ children }) => {
  return (
    <>
      {!isMobile() ? <Navbar /> : <NavbarMobile />}

      <main>
        {children}
        <Footer />
      </main>

      <style jsx>{`
        main {
          display: grid;
          grid-template-rows: 1fr auto;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          align-items: center;
          background: var(--background);
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
        }
      `}</style>
    </>
  );
};

export default Layout;
