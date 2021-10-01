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
  const [enabled, setEnabled] = useDarkMode();

  return (
    <>
      <nav>
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
                width={120}
                height={120}
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
      </nav>

      <style jsx>{`
        nav {
          position: absolute;
          top: 0;
          left: 0;

          display: flex;
          justify-content: center;
          align-items: center;

          height: max-content;
          width: 100vw;
          padding: 1.6rem var(--desktop-padding);

          color: var(--white);
          background: linear-gradient(
            180deg,
            rgba(32, 32, 32, 0.8998949921765581) 0%,
            rgba(32, 32, 32, 0) 100%
          );
          z-index: 50;

        }

        a.logo {
          margin: 0 5.2rem;
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
          background-color: var(--red);
          transition: all 0.25s linear;
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
