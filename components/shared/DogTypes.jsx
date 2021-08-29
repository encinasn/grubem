import Link from 'next/link';
import Image from 'next/image';
import {BREAKPOINTS} from 'utils/breakpoints';

const DogTypes = () => {
  return (
    <>
      <div>
        <Link href="/ejemplares/machos">
          <a>
            <Image
              src="/images/brand/machos.png"
              alt="Ir a la seccion de machos"
              width={300}
              height={300}
              priority
              />
          </a>
        </Link>
        <Link href="/ejemplares/hembras">
          <a>
            <Image
              src="/images/brand/hembras.png"
              alt="Ir a la seccion de hembras"
              width={300}
              height={300}
              priority
              />
          </a>
        </Link>
        <Link href="/ejemplares/cachorros">
          <a>
            <Image
              src="/images/brand/cachorros.png"
              alt="Ir a la seccion de cachorros"
              width={300}
              height={300}
              priority
            />
          </a>
        </Link>
      </div>

      <style jsx>{`
        div {
          display: grid;
          grid-template: auto / 1fr 1fr 1fr;
          grid-gap: 1.2rem;
          width: 100%;
        }

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--large-radius);
          overflow: hidden;
          transition: all 0.2s;
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          a:hover {
            box-shadow: var(--card-shadow);
          }
        }
      `}</style>
    </>
  );
};

export default DogTypes;
