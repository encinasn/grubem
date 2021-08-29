const Label = ({ name, label, disabled, optional }) => {
  return (
    <>
      <div className="label">
        <label htmlFor={name}>{label}</label>
        <span>(Opcional)</span>
      </div>

      <style jsx>{`
        .label {
          display: ${label ? 'flex' : 'none'};
          padding: 10px 0 6px;
          font-weight: 600;
          line-height: 1.4rem;
        }
        .label > label {
          cursor: ${disabled ? 'default' : 'pointer'};
        }
        .label span {
          display: ${optional ? 'block' : 'none'};
          margin-left: 0.6rem;
          margin-top: 0.1rem;
          font-size: var(--small-size);
          color: var(--grey-700);
        }
      `}</style>
    </>
  );
};

export default Label;
