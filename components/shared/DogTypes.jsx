import Link from 'next/link';
import Image from 'next/image';

const DogTypes = () => {
  return (
    <>
      <section>
        <Link href="/ejemplares/machos">
          <a>
            <Image
              src="/images/brand/machos.png"
              alt="Ir a la seccion de machos"
              width={100}
              height={100}
            />
          </a>
        </Link>
        <Link href="/ejemplares/hembras">
          <a>
            <Image
              src="/images/brand/hembras.png"
              alt="Ir a la seccion de hembras"
              width={100}
              height={100}
            />
          </a>
        </Link>
        <Link href="/ejemplares/cachorros">
          <a>
            <Image
              src="/images/brand/cachorros.png"
              alt="Ir a la seccion de cachorros"
              width={100}
              height={100}
            />
          </a>
        </Link>
      </section>

      <style jsx>{`
        section {
          display: grid;
          grid-template: auto / 1fr 1fr 1fr;
          grid-gap: 1.2rem;
          width: 100vw;
          padding: var(--mobile-padding);
        }

        a {
          border-radius: var(--normal-radius);
          border: 1px solid var(--border);
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default DogTypes;
