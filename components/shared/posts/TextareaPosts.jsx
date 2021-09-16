const TextareaPost = ({ name, placeholder, disabled, onChange, onDrop }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    onDrop('posts', e.dataTransfer.files);
  };

  return (
    <>
      <div className="wrapper">
        <textarea
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
          rows="5"
          onDrop={handleDrop}
        />
      </div>

      <style jsx>{`
        .wrapper {
          position: relative;
          z-index: 10;
        }

        textarea {
          width: 100%;
          padding: 0.8rem;
          background: none;
          border-radius: var(--normal-radius);
          outline: none;
          resize: none;
          border: none;
        }
        textarea[disabled] {
          background-color: var(--grey-100);
          border: 2px solid var(--grey-100);
          outline: none;
          pointer-events: none;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default TextareaPost;
