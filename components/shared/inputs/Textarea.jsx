//Import de librerias.
import { forwardRef } from 'react';
//Import de components.
import Label from '@shared/inputs/Label';
import ErrorMessage from '@shared/inputs/ErrorMessage';
//Import de iconos.
import { HiOutlineX } from 'react-icons/hi';

const Textarea = forwardRef(
  (
    { name, placeholder, label, disabled, errorMessage, width, optional },
    ref
  ) => {
    return (
      <>
        <div>
          <Label
            label={label}
            name={name}
            optional={optional}
            disabled={disabled}
          />
          <div className="input__wrapper">
            <textarea
              placeholder={placeholder}
              name={name}
              disabled={disabled}
              autoComplete="off"
              rows="5"
              ref={ref?.ref}
              onBlur={ref?.onBlur}
              onChange={ref?.onChange}
            />
            {errorMessage !== undefined && (
              <div className="icon">
                <HiOutlineX size="2.2rem" />
              </div>
            )}
          </div>
          <ErrorMessage errorMessage={errorMessage} />
        </div>

        <style jsx>{`
          .label {
            display: ${label ? 'flex' : 'none'};
            padding: 10px 0;
            font-weight: 600;
            cursor: pointer;
          }
          .label span {
            display: ${optional ? 'block' : 'none'};
            margin-left: 0.6rem;
            margin-bottom: -0.6rem;
            font-size: var(--small-size);
            color: var(--grey-500);
          }

          .input__wrapper {
            position: relative;
            z-index: 10;
          }

          textarea {
            outline: none;
            resize: none;
            width: ${width ? width : '100%'};
            padding: 10px 40px 10px 10px;
            background: none;
            border-radius: var(--normal-radius);
            transition: 0.3s ease all;
            border: ${errorMessage !== undefined
              ? '2px solid var(--error-color) !important;'
              : '2px solid var(--border);'};
          }
          textarea:focus {
            border: 2px solid var(--black);
            background: var(--white);
          }
          textarea[disabled] {
            background-color: var(--grey-100);
            border: 2px solid var(--grey-100);
            outline: none;
            pointer-events: none;
            cursor: not-allowed;
          }

          .icon {
            position: absolute;
            display: flex;
            align-items: center;
            right: 12px;
            top: 24px;
            z-index: 100;
            opacity: 0;
            transform: translateY(-50%);
            color: var(--error-color);
            opacity: ${errorMessage !== undefined ? 1 : 0};
          }
        `}</style>
      </>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
