const src =
  'https://upload.wikimedia.org/wikipedia/commons/9/94/Cane_da_pastore_tedesco_adulto.jpg';

const PostCardTwo = () => {
  return (
    <>
      <li>
        <div className="text">
          <h2>Titulo de la publicacion de ejemplo</h2>
        </div>
        <div className="picture">
          <img src={src} alt="" />
        </div>
      </li>

      <style jsx>{`
        li {
          position: relative;
          display: flex;
          justify-content: flex-end;

          width: calc(100% - (var(--desktop-padding) * 2));
          height: auto;
          background-color: var(--grey-500);
          border-radius: var(--large-radius);
          overflow: hidden;
        }

        .text {
          position: absolute;
          top: 0;
          left: 0;

          width: 80%;
          height: 100%;
          padding: 6% 32% 6% 10%;

          font-size: 2.8rem;
          color: var(--white);

          background: rgb(32, 32, 32);
          background: linear-gradient(
            90deg,
            rgba(32, 32, 32, 1) 0%,
            rgba(32, 32, 32, 1) 60%,
            rgba(32, 32, 32, 0) 100%
          );
          z-index: 1;
        }

        .picture {
          position: relative;
          width: 54%;
          height: auto;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background-color: pink;
        }
        .picture > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      `}</style>
    </>
  );
};

export default PostCardTwo;
