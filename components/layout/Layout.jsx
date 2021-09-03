// layout
import Navbar from '@layout/Navbar';
import Footer from '@layout/footer/Footer';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const Layout = ({ children }) => {
  const isMobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 600;
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {children}
        <Footer />
      </main>

      <style jsx>{`
        main {
          width: 100%;
          min-height: 100vh;
          align-items: center;
          background-color: var(--white);
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
        }
      `}</style>
    </>
  );
};

export default Layout;
