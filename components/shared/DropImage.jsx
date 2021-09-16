import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
// icons
import { HiX } from 'react-icons/hi';
// components
import Label from '@shared/inputs/Label';

const DropImage = ({
  name,
  label,
  width = '100%',
  optional,
  files = [],
  onChange,
  deleteFile,
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    onChange('dogs', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({ accept: 'image/*', maxFiles: 9, onDrop });

  return (
    <>
      <Label label={label} name={name} optional={optional} />

      {!files.length && (
        <div className="wrapper" {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Arrastra y suelta el archivo, o haz click para seleccionarlo</p>
        </div>
      )}

      <div className="thumb_wrapper">
        {files.map((file) => (
          <div className="thumb" key={file}>
            <img src={file} alt="Foto del perro" />
            <div onClick={() => deleteFile(file)}>
              <HiX size="2rem" />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .wrapper,
        .thumb > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wrapper {
          flex: 1;
          flex-direction: column;
          height: 20rem;
          width: ${width};
          padding: 0 2rem;
          border-width: 2px;
          border-radius: var(--normal-radius);
          border-style: dashed;
          border-color: ${isDragAccept
            ? ' var(--success-color)'
            : isDragReject
            ? 'var(--error-color)'
            : ' var(--border)'};
          background-color: var(--white);
          cursor: pointer;
          color: var(--grey-700);
          outline: none;
          transition: border 0.2s linear;
        }
        p {
          text-align: center;
        }

        .thumb_wrapper {
          display: grid;
          grid-template-columns: repeat(${files.length === 1 ? 1 : 2}, 1fr);
          grid-gap: 0.8rem;
          width: ${width};
        }
        .thumb {
          position: relative;
          width: 100%;
          height: max-content;
          overflow: hidden;
          margin: 2px 0;
          border: 1px solid var(--border);
          border-radius: var(--normal-radius);
          aspect-ratio: 4 / 3;
        }

        .thumb > img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          object-position: center;
          border-radius: var(--normal-radius);
        }

        .thumb > div {
          position: absolute;
          top: 0.8rem;
          right: 0.8rem;
          height: 2.8rem;
          width: 2.8rem;
          color: var(--white);
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

DropImage.displayName = 'DropImage';

export default DropImage;
