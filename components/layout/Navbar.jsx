import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// icons
import { HiMenu, HiX } from 'react-icons/hi';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

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

  const handleClick = () => setActive(!active);

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

          <section
            className={`toggle ${active ? 'active' : ''}`}
            onClick={handleClick}
          >
            {active ? <HiX size="4rem" /> : <HiMenu size="4rem" />}
          </section>
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
          background-color: var(--black);
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
          background: none;
        }
        nav.background {
          background-color: rgba(0, 0, 0, 0.9);
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
        }
      `}</style>
    </>
  );
};

export default Navbar;
