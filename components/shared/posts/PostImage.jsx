//import icons
import { FaTimes } from 'react-icons/fa';

const PostImage = ({ imgUrl, onChange }) => {
  const handleClick = (e) => {
    onChange(imgUrl);
  };
  return (
    <>
      <div>
        <span onClick={handleClick}>
          <FaTimes size="1.6rem" />
        </span>
        <img src={imgUrl} alt="" />
      </div>

      <style jsx>{`
        div {
          position: relative;
          height: max-content;
          width: 100%;
          margin: 1.2rem 0.8rem 1.2rem 0;
        }

        div > img {
          width: 100%;
          height: auto;
          border-radius: var(--large-radius);
          object-fit: cover;
          object-position: center;
        }

        div > span {
          position: absolute;
          top: 4px;
          right: 4px;

          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.4rem;
          width: 2.4rem;
          border-radius: 50%;
          color: var(--white);
          background-color: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default PostImage;
