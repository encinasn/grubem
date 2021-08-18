import Head from "next/head";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Criadero Grubem</title>
      </Head>
      <div>
        <Image src="/logo.png" alt="" width={220} height={220} />
        <h3>Servicio en mantenimiento</h3>
      </div>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100vw;
          height: 100vh;
          background-color: #202020;
        }

        h3 {
          font-family: ${`Poppins, sans-serif`};
          font-weight: normal;
          color: #cdcdcd;
        }
      `}</style>
    </>
  );
};

export default HomePage;
