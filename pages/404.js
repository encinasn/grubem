import Link from 'next/link';

const Custom404 = () => {
  return (
    <>
      <main>
        <section>
          <h1>404</h1>
          <h3>Parece que la pagina que buscas no existe</h3>
          <Link href="/">
            <a>Volver a Inicio</a>
          </Link>
        </section>
      </main>
      
      <style jsx>
        {`
          main {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            padding-bottom: 8rem;
          }
          section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 30%;
          }
          h1 {
            font-size: 8rem;
            text-align: center;
          }
          h3 {
            font-size: 3rem;
            text-align: center;
            margin: 1rem 0 4rem;
          }
        `}
      </style>
    </>
  );
};

export default Custom404;
