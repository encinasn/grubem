import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// icons
import { HiMenu, HiX } from 'react-icons/hi';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';

const Navbar = ({ active, setActive }) => {
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

  const handleClick = () => setActive(!active);

  return (
    <>
      <nav
        className={`${visible ? 'background' : 'transparent'} ${
          active ? 'active' : ''
        } `}
      >
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

        <section
          className={`toggle ${active ? 'active' : ''}`}
          onClick={handleClick}
        >
          {active ? <HiX size="4rem" /> : <HiMenu size="4rem" />}
        </section>
      </nav>

      <style jsx>{`
        .toggle {
          width: 4rem;
          height: 4rem;
          cursor: pointer;
        }
        .toggle.active {
          cursor: pointer;
        }

        nav {
          position: fixed;
          top: 0;
          right: 0;

          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 10rem;
          width: 100vw;
          padding: 0 var(--mobile-padding);
          color: var(--white);
          background-color: var(--black);
          z-index: 50;
          transition: all 0.2s linear, right 0.5s ease;
        }
        nav.active {
          right: 28rem;
        }
        nav.transparent {
          height: 10rem;
          color: var(--white);
          background: none;
        }
        nav.background {
          height: 7.2rem;
          color: var(--white);
          background-color: var(--black);
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
