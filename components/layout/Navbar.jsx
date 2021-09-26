import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// icons
import { HiMenu, HiX } from 'react-icons/hi';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
//hook
import useDarkMode from 'hooks/useDarkMode';

const pages = [
  {
    id: 1,
    name: 'Inicio',
    path: '/',
  },
  {
    id: 2,
    name: 'Novedades',
    path: '/#novedades',
  },
  {
    id: 3,
    name: 'Nosotros',
    path: '/#nosotros',
  },
  {
    id: 4,
    name: 'Cachorros',
    path: '/#cachorros',
  },
  {
    id: 5,
    name: 'Machos',
    path: '/#machos',
  },
  {
    id: 6,
    name: 'Hembras',
    path: '/#hembras',
  },
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  const [enabled, setEnabled] = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll < 40) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const hashId = window.location.hash;

  //     if (hashId) {
  //       const element = document.getElementById(hashId.replace('#', ''));
  //       if (element) {
  //         element.scrollIntoView({
  //           behavior: 'smooth',
  //           block: 'start',
  //           inline: 'nearest',
  //         });
  //       }
  //     }
  //   }
  // }, []);

  return (
    <>
      <nav className={`transparent ${visible ? 'visible' : ''} `}>
        <div className="nav-layout">
          <section className="navigation">
            <Link href="/#nosotros">
              <a>
                Nosotros
                <div></div>
              </a>
            </Link>

            <Link href="/#novedades">
              <a>
                Novedades
                <div></div>
              </a>
            </Link>

            <Link href="/#contacto">
              <a>
                Contacto
                <div></div>
              </a>
            </Link>
          </section>

          <section>
            <Link href="/">
              <a className="logo">
                <Image
                  src="/images/brand/logo.png"
                  alt="Escudo de Von der Grubem Land"
                  width={100}
                  height={100}
                  layout="fixed"
                  priority
                />
              </a>
            </Link>
          </section>

          <section className="navigation">
            <Link href="/#cachorros">
              <a>
                Cachorros
                <div></div>
              </a>
            </Link>

            <Link href="/#machos">
              <a>
                Machos
                <div></div>
              </a>
            </Link>

            <Link href="/#hembras">
              <a>
                Hembras
                <div></div>
              </a>
            </Link>
          </section>
        </div>
      </nav>

      <style jsx>{`
        /* Logo */

        /* Navbar */

        nav {
          position: fixed;
          top: -14rem;

          height: max-content;
          max-height: 100vh;
          width: 100vw;
          padding: 0 var(--mobile-padding);
          z-index: 50;
          transition: top 0.2s ease;
        }
        nav.visible {
          top: 0;
        }

        nav > .nav-layout {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 10rem;
          width: 100%;
          transition: all 0.2s linear;
        }
        nav.transparent > .nav-layout {
          height: 14rem;
          color: var(--white);
        }

        nav.transparent {
          background: linear-gradient(
            180deg,
            rgba(32, 32, 32, 0.8998949921765581) 0%,
            rgba(32, 32, 32, 0) 100%
          );
        }

        a.logo {
          margin: 0 5.2rem;
        }

        nav {
          padding: 0 var(--desktop-padding);
        }
        nav > .nav-layout {
          justify-content: center;
        }

        nav.active {
          padding: 0 2rem;
        }

        .navigation {
          display: flex;
          align-items: center;
        }
        .navigation a {
          padding: 0.8rem 1.6rem;
          font-weight: 500;
          font-size: 1.8rem;
          border-radius: var(--normal-radius);
          cursor: pointer;
          color: inherit;
        }
        .navigation a div {
          margin: 2px 3px 0 3px;
          height: 2.5px;
          width: 0;
          opacity: 0;
          border-radius: 1000px;
          background-color: var(--font);
          transition: all 0.25s linear;
        }
        nav.transparent .navigation a div {
          background-color: var(--red);
        }

        .navigation > a:hover > div {
          width: calc(100% - 6px);
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default Navbar;
