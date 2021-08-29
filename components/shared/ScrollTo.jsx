import { FaArrowDown } from 'react-icons/fa';

const ScrollTo = () => {
  const handleClick = () => {
    window.scroll({
      top: window.innerHeight - 72,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <button onClick={handleClick}>
        <FaArrowDown size="2.4rem" />
      </button>
      
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 5rem;
          width: 5rem;
          border: none;
          border-radius: 50%;
          background-color: var(--red);
          cursor: pointer;
          outline: none;
          transition: transform 0.2 linear;
        }
        button:hover {
          transform: scale(0.9);
        }
      `}</style>
    </>
  );
};

export default ScrollTo;
