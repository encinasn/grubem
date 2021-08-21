/* eslint-disable no-nested-ternary */
import { useState, useEffect, forwardRef } from 'react';
//import icons
import { HiOutlineCloudUpload, HiOutlinePhotograph, HiX } from 'react-icons/hi';

const File = forwardRef(
  ({ label, name, optional, disabled, defaultImage }, ref) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
      if (defaultImage) {
        setImage(defaultImage);
      }
    }, [defaultImage]);

    const imageHandler = (e) => {
      ref?.onChange(e)
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    };

    return (
      <>
        <div className="label">
          <label htmlFor={name}>{label}</label>
          <span>(Opcional)</span>
        </div>

        <section>
          <div className="img-holder">
            {image ? (
              <img src={image} alt="" id="img" className="img" />
            ) : disabled ? (
              <div className="holder">
                <HiOutlinePhotograph size="4rem" />
                <span>Este producto no tiene imagen</span>
              </div>
            ) : (
              <div className="holder">
                <HiOutlineCloudUpload size="4rem" />
                <span>Sube una imagen de tu producto</span>
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            name={name}
            disabled={disabled}
            id={name}
            onChange={imageHandler}
            ref={ref?.ref}
          />
          {image ? (
            <div
              className={disabled ? 'image-delete disabled' : 'image-delete'}
              onClick={() => setImage(null)}
            >
              <HiX size="1.8rem" />
            </div>
          ) : (
            <label
              className={disabled ? 'image-upload disabled' : 'image-upload'}
              htmlFor={name}
            >
              Subir imagen
            </label>
          )}
        </section>

        <style jsx>{`
          .label {
            display: ${label ? 'flex' : 'none'};
            padding: 10px 0 6px;
            font-weight: 600;
            cursor: pointer;
          }
          .label span {
            display: ${optional ? 'block' : 'none'};
            margin-left: 0.6rem;
            margin-bottom: -0.6rem;
            font-size: var(--small-font-size);
            color: var(--bold-gray);
          }

          section {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 220px;
            width: 220px;
            border-radius: var(--large-radius);
            border: 2px solid var(--mid-gray);
          }

          .drag {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 10;
          }

          .holder {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 140px;
            height: 100%;
            padding-bottom: ${disabled ? 0 : '40px'};
            text-align: center;
            color: var(--dark-gray);
          }
          .holder span {
            margin-top: 10px;
          }

          .img-holder {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 8px;
          }
          .img {
            width: 100%;
            height: auto;
            object-fit: cover;
            object-position: center;
          }
          input[type='file'] {
            display: none;
          }

          .image-upload {
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120px;
            height: 36px;
            font-weight: 500;
            border-radius: var(--normal-radius);
            border: 2px solid var(--black-color);
            cursor: pointer;
            transition: 0.2s;
            z-index: 15;
          }
          .image-upload:hover {
            background-color: var(--black-color);
            color: var(--white-color);
          }

          .image-delete {
            position: absolute;
            top: 24px;
            right: -6px;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            font-weight: 500;
            color: var(--white-color);
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.4);
            cursor: pointer;
            transition: 0.2s;
            z-index: 15;
          }
          .image-delete:hover {
            background-color: rgba(0, 0, 0, 0.6);
          }

          .disabled {
            display: none;
          }
        `}</style>
      </>
    );
  }
);

File.displayName = 'InputFile'

export default File;
