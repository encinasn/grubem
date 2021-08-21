//Import de librerias.
import { forwardRef } from 'react';
//Import de components.
import Label from 'components/shared/Label';
import ErrorMessage from 'components/shared/ErrorMessage';
//Import de iconos.
import { HiOutlineX } from 'react-icons/hi';

const InputDefault = forwardRef(
  (
    {
      type = 'text',
      name,
      placeholder,
      label,
      disabled,
      errorMessage,
      width = '100%',
      optional,
    },
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
            <input
              type={type}
              placeholder={placeholder}
              name={name}
              onBlur={ref?.onBlur}
              onChange={ref?.onChange}
              ref={ref?.ref}
              disabled={disabled}
              autoComplete="off"
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
          .input__wrapper {
            position: relative;
            z-index: 10;
          }

          input {
            height: var(--large-height);
            width: ${width};
            padding: 0 40px 0 10px;
            background: none;
            border-radius: var(--normal-radius);
            transition: 0.3s ease all;
            border: 2px solid
              ${errorMessage !== undefined
                ? 'var(--error-color) !important;'
                : 'var(--mid-gray);'};
          }
          input:focus {
            background: var(--white-color);
            border: 2px solid var(--first-yellow);
            outline: none;
            box-shadow: 0 0 0 0.1875em
              ${errorMessage !== undefined
                ? 'rgb(255, 209, 0, 0.0)'
                : 'rgb(255, 209, 0, 0.2)'};
          }
          input[disabled] {
            background-color: var(--light-gray);
            border: 2px solid var(--light-gray);
            outline: none;
            pointer-events: none;
            cursor: not-allowed;
          }

          .icon {
            position: absolute;
            display: flex;
            align-items: center;
            right: 10px;
            top: 22px;
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

InputDefault.displayName = 'InputDefault'

export default InputDefault;
