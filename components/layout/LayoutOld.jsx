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
      <main>{children}</main>
      <Footer />

      <style jsx>{`
        main {
          min-height: calc(100vh - 14.5rem);
        }
        @media (min-width: ${BREAKPOINTS.tab}) {
          main {
            min-height: calc(100vh - 8.5rem);
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
