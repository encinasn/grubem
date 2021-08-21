const Switch = ({ name }) => {
  return (
    <>
      <div>
        <input type="checkbox" name={name} id={name} />
        <label htmlFor={name}></label>
      </div>

      <style jsx>{`
        label {
          position: relative;
          display: inline-block;
          width: 45px;
          height: 25px;
          background: var(--mid-gray);
          border-radius: 100px;
          cursor: pointer;
          transition: 0.2s;
        }

        label::after {
          content: '';
          display: block;
          width: 15px;
          height: 15px;
          background: var(--white-color);
          border-radius: 50%;
          position: absolute;
          top: 5px;
          left: 5px;
          transition: 0.2s;
        }

        input:checked + label::after {
          left: 25px;
        }

        input:checked + label {
          background: var(--first-yellow);
        }

        input {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Switch;
