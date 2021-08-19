import Navbar from '@layout/Navbar';
import Footer from '@layout/footer/Footer';

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
      <Footer/>

      <style jsx>{`
        main {
          padding-top: 7.2rem;
          min-height: calc(100vh - 10rem);
        }
      `}</style>
    </>
  );
};

export default Layout;
