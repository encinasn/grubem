import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// icons
import { HiMenu, HiX } from 'react-icons/hi';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
//hook
import useDarkMode from 'hooks/useDarkMode';

const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 600;
  }
};

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const [enabled, setEnabled] = useDarkMode();

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

  useEffect(() => {
    console.log('hola')
    if (typeof window !== 'undefined') {
      const hashId = window.location.hash;

      if (hashId) {
        const element = document.getElementById(hashId.replace('#', ''));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      }
    }
  }, []);

  const handleClick = () => setActive(!active);

  //fb, ig , whatsapp
  return (
    <>
      <nav
        className={`${!visible && !active ? 'transparent' : 'background'} ${
          active ? 'active' : ''
        }`}
      >
        <div className="nav-layout">
          <section>
            <Link href="/">
              <a>
                <Image
                  src="/images/brand/logo-horizontal.png"
                  alt="Escudo de Von der Grubem Land"
                  width={250}
                  height={40}
                  layout="fixed"
                  priority
                />
              </a>
            </Link>
          </section>

          {isMobile() ? (
            <section
              className={`toggle ${active ? 'active' : ''}`}
              onClick={handleClick}
            >
              {active ? <HiX size="4rem" /> : <HiMenu size="4rem" />}
            </section>
          ) : (
            <section className="navigation">
              <Link href="/">
                <a>
                  Inicio
                  <div></div>
                </a>
              </Link>

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

              <Link href="/#ejemplares">
                <a>
                  Ejemplares
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
          )}
        </div>

        <div className={`menu ${active ? 'active' : ''}`}>
          <ul>
            <li>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/competencias">
                <a>Competencias</a>
              </Link>
            </li>
            <li>
              <Link href="/aprender">
                <a>Aprender</a>
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                <a>Contacto</a>
              </Link>
            </li>
          </ul>

          <Link href="/admin/ingresar">
            <a className="admin">
              <Image
                src="/images/brand/logo.png"
                alt="Escudo de Von der Grubem Land"
                width={120}
                height={120}
                layout="fixed"
              />
            </a>
          </Link>
        </div>
      </nav>

      <style jsx>{`
        /* Navbar */

        nav {
          position: fixed;
          top: 0;

          height: max-content;
          max-height: 100vh;
          width: 100vw;
          padding: 0 var(--mobile-padding);
          color: var(--white);
          background: rgb(32, 32, 32);
          z-index: 50;
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
          height: 10rem;
          color: var(--white);
        }
        nav.background > .nav-layout {
          height: 7.2rem;
          color: var(--white);
        }

        nav.transparent {
          background: linear-gradient(
            180deg,
            rgba(32, 32, 32, 0.8998949921765581) 0%,
            rgba(32, 32, 32, 0) 100%
          );
        }
        nav.background {
          background: linear-gradient(
            180deg,
            rgba(32, 32, 32, 1) 0%,
            rgba(32, 32, 32, 0.7990546560421043) 100%
          );
          backdrop-filter: blur(4px);
        }

        .menu {
          display: none;
        }

        @media screen and (max-width: ${BREAKPOINTS.tab}) {
          .toggle {
            width: 4rem;
            height: 4rem;
            cursor: pointer;
          }

          /* Menu */
          .menu {
            position: relative;
            top: 0;

            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: calc(100vh - 7.2rem);
            padding: 0 0 12rem;
            transition: all 0.3s linear;
          }
          .menu.active {
            display: flex;
            padding-top: 6rem;
            bottom: 0;
          }
          .menu .admin {
            cursor: default;
          }

          .menu ul li {
            margin: 2rem 0;
          }
          .menu ul li a {
            font-size: 3.2rem;
            color: var(--white);
          }
          .menu ul li a:hover {
            color: var(--red);
          }
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          nav {
            padding: 0 var(--desktop-padding);
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
            font-size: 1.6rem;
            border-radius: var(--normal-radius);
            cursor: pointer;
            color: var(--white);
          }
          .navigation a div {
            margin: 3px 2px 0;
            height: 2.5px;
            width: 0;
            opacity: 0;
            border-radius: 1000px;
            background-color: var(--white);
            transition: all 0.25s linear;
          }
          .navigation > a:hover > div {
            width: calc(100% - 4px);
            opacity: 1;
          }

          .navigation > a.primary {
            border: 1px solid var(--white);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
