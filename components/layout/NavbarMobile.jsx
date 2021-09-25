import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// icons
import { HiMenu, HiX } from 'react-icons/hi';
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

const NavbarMobile = () => {
  const [visible, setVisible] = useState(true);
  const [transparency, setTransparency] = useState(true);
  const [active, setActive] = useState(false);

  const [enabled, setEnabled] = useDarkMode();

  useEffect(() => {
    //let lastScroll = 0;
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll < 80) {
        //setTransparency(true);
        setVisible(true);
      } else {
        //setTransparency(false);
        setVisible(false);
      }

      // if (scroll > lastScroll) {
      //   setVisible(true);
      // } else {
      //   setVisible(true);
      // }

      //lastScroll = scroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
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

  return (
    <>
      <nav
        className={`
        ${transparency && !active ? 'transparent' : 'background'} 
        ${visible ? 'visible' : ''} 
        ${active && !visible ? 'active visible' : active ? 'active' : ''}`}
      >
        <div className="nav-layout">
          <section>
            <Link href="/">
              <a className="logo">
                <Image
                  src="/images/brand/logo.png"
                  alt="Escudo de Von der Grubem Land"
                  width={60}
                  height={60}
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
            {pages.map(({ id, name, path }) => (
              <li key={id}>
                <Link href={path}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <style jsx>{`
        /* Logo */

        /* NavbarMobile */

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
          height: 8rem;
          width: 100%;
          transition: all 0.2s linear;
        }
        nav.transparent > .nav-layout {
          height: 10rem;
          color: var(--white);
        }
        nav.background > .nav-layout {
          height: 8rem;
          color: var(--font);
        }

        nav.transparent {
          background: linear-gradient(
            180deg,
            rgba(32, 32, 32, 0.8998949921765581) 0%,
            rgba(32, 32, 32, 0) 100%
          );
        }
        nav.background {
          background: var(--background);
          box-shadow: var(--normal-shadow);
        }

        .menu {
          display: none;
        }

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
          background-color: var(--background);
        }
        .menu.active {
          display: flex;
          padding-top: 4rem;
          bottom: 0;
        }

        .menu ul li {
          margin: 2rem 0;
        }
        .menu ul li a {
          font-size: 3.2rem;
          color: var(--font);
        }
        .menu ul li a:hover {
          color: var(--red);
        }
      `}</style>
    </>
  );
};

export default NavbarMobile;
