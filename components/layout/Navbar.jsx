import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// icons
import { HiMenuAlt3 } from 'react-icons/hi';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) setVisible(true);
      if (window.scrollY < 60) setVisible(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={visible ? 'background' : 'transparent'}>
        <section>
          <Link href="/">
            <a>
              <Image
                src="/images/brand/logo-horizontal.png"
                alt="Escudo de Von der Grubem Land"
                width={250}
                height={40}
                layout="fixed"
              />
            </a>
          </Link>
        </section>

        <section className="navigation">
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/noticias">
            <a>Noticias</a>
          </Link>
          <Link href="/competencias">
            <a>Competencias</a>
          </Link>
          <Link href="/contacto">
            <a className="primary">Contacto</a>
          </Link>
        </section>

        <section className="hamburger">
          <HiMenuAlt3 size="2.4rem" />
        </section>
      </nav>

      <style jsx>{`
        nav {
          position: fixed;
          top: 0;

          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          height: 7.2rem;
          width: 100vw;
          padding: 0 var(--mobile-padding);
          color: var(--white);
          background-color: var(--black);

          z-index: 50;
          transition: background-color 0.2s linear;
        }
        nav.transparent {
          color: var(--white);
          background: none;
        }
        nav.background {
          color: var(--white);
          background-color: var(--black);
        }

        .navigation > a {
          padding: 1.2rem 1.6rem;
          font-weight: 500;
          font-size: 1.4rem;
          border-radius: var(--normal-radius);
          cursor: pointer;
        }
        .navigation > a:hover {
          background-color: rgb(255, 255, 255, 0.1);
        }

        .navigation > a.primary {
          border: 1px solid var(--white);
        }

        .navigation {
          display: none;
        }
        .hamburger {
          padding: 0.8rem;
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          nav {
            padding: 0 var(--desktop-padding);
          }
          .hamburger {
            display: none;
          }
          .navigation {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
