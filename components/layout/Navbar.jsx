import Link from 'next/link';
import Image from 'next/image';
import { BREAKPOINTS } from 'utils/breakpoints';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  return (
    <>
      <nav>
        <section>
          <Link href="/">
            <a>
              <Image
                src="/images/brand/logo-horizontal.png"
                alt="Escudo de Von der Grubem Land"
                responsive="true"
                width={250}
                height={40}
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
            <a>Contacto</a>
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

        .navigation > a::last-child {
          border: 2px solid var(--red);
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
