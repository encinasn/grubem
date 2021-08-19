import { FaBone, FaDog } from 'react-icons/fa';

const IconItem = ({ icon = '', title = 'Item' }) => {
  return (
    <>
      <li>
        <div>
          {icon === '' && <FaBone size="1.6rem" />}
          {icon === 'dog' && <FaDog size="1.6rem" />}
        </div>
        <span>{title}</span>
      </li>

      <style jsx>{`
        li {
          display: flex;
          align-items: center;
          padding: 0.4rem;
          cursor: pointer;
        }
        div {
          color: var(--red);
        }
        span {
          margin-left: 1.2rem;
        }
      `}</style>
    </>
  );
};

export default IconItem;
