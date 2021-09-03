import { useState, useEffect } from 'react';

const Text = () => {
  const [state, setState] = useState(false);

  const handleClick = () => setState(!state);

  console.log(state);

  useEffect(() => {
    const handleScroll = (e) => console.log(e);

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className={`menu ${state ? 'active' : ''}`} onClick={handleClick}>
          Holasdasd
        </div>
        <div className="content">
          <button>Holasssss</button>
          <button className="btn">Holasssss</button>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: auto 1fr;
        }

        .menu {
          transition: all 0.2s ease;
          width: 62px;
          height: 100vh;
          background-color: #f2f2f2;
          cursor: pointer;
        }
        .menu.active {
          width: 20rem;
        }

        .content {
          padding: 3rem;
          width: 100%;
          height: 100vh;
          overflow-y: scroll;
        }

        button {
          width: 100%;
          height: 5rem;
        }
        button.btn {
          margin: 5rem 0;
          width: 100%;
          height: 100vh;
          background-color: #202020;
        }
      `}</style>
    </>
  );
};

export default Text;
