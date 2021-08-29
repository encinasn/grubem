import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Menu = () => {
  return (
    <>
      <aside>
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
      </aside>

      <style jsx>{`
        aside {
          position: fixed;
          top: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 28rem;
          height: 100vh;
          padding: 10rem 0;
          background-color: var(--grey-100);
        }
        aside ul {
          position: relative;
        }

        aside .admin {
          cursor: default;
        }

        aside ul li {
          margin: 1.6rem 0;
        }
        aside ul li a {
          font-size: 2.4rem;
          color: #111;
        }
        aside ul li a:hover {
          color: var(--red);
        }
      `}</style>
    </>
  );
};

const MenuMeno = memo((props) => {
  return <Menu {...props} />;
});

export default MenuMeno;
