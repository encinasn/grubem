import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const SocialMedia = ({ color }) => {
  return (
    <>
      <div>
        <a
          href="https://www.instagram.com/grubemland/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram size="2.4rem" />
        </a>
        <a
          href="https://www.facebook.com/Von-Der-GRubEm-Land-ovejeros-alemanes-102577168234266/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare size="2rem" />
        </a>
      </div>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          color: ${color ? 'var(--white)' : 'var(--black)'};
        }
        a {
          padding: 0.4rem;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default SocialMedia;
