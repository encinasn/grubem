//import icons
import { FaImages } from 'react-icons/fa';

const FileIcon = ({ name, disabled, onChange }) => {
  const imageHandler = (e) => {
    onChange(e.target.files);
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        multiple
        name={name}
        disabled={disabled}
        onChange={imageHandler}
        id={name}
      />

      <label
        className={disabled ? 'image-upload disabled' : 'image-upload'}
        htmlFor={name}
      >
        <FaImages size="2rem" />
      </label>

      <style jsx>{`
        input[type='file'] {
          display: none;
        }

        label {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 4rem;
          width: 4rem;
          color: var(--black);
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default FileIcon;
