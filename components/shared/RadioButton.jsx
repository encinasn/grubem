//Import de librerias.
import { forwardRef } from 'react';
//Import de components.
import Label from '@shared/inputs/Label';
import ErrorMessage from '@shared/inputs/ErrorMessage';

const RadioButtons = forwardRef(
  (
    { name, label, disabled, errorMessage, width = '100%', optional, options },
    ref
  ) => {
    return (
      <>
        <div>
          <Label label={label} optional={optional} disabled={disabled} />
          <div className="input__wrapper">
            {options.map((option) => (
              <div key={option.id}>
                <input
                  type="radio"
                  name={name}
                  id={option.name}
                  value={option.value}
                  onBlur={ref?.onBlur}
                  onChange={ref?.onChange}
                  ref={ref?.ref}
                  disabled={disabled}
                />
                <label
                  className={`radio ${disabled ? 'disabled' : ''}`}
                  htmlFor={option.name}
                >
                  {option.name}
                </label>
              </div>
            ))}
          </div>
          <ErrorMessage errorMessage={errorMessage} />
        </div>

        <style jsx>{`
          .input__wrapper {
            display: grid;
            grid-template-columns: repeat(${options.length}, 1fr);
            grid-gap: 0 1.2rem;
            width: ${width};
            z-index: 10;
          }

          input[type='radio'] {
            display: none;
          }

          input[type='radio']:checked + .radio {
            background: var(--white);
            border: 2px solid var(--black);
            outline: none;
            font-weight: 600;
          }

          .radio {
            display: flex;
            align-items: center;
            justify-content: center;
            height: var(--large-height);
            width: 100%;
            background: none;
            border-radius: var(--normal-radius);
            transition: 0.3s ease all;
            border: 2px solid
              ${errorMessage !== undefined
                ? 'var(--error-color) !important;'
                : 'var(--grey-300);'};
            cursor: pointer;
          }

          .radio.disabled {
            background-color: var(--grey-100);
            border: 2px solid var(--grey-100);
            outline: none;
            pointer-events: none;
            cursor: not-allowed;
          }
        `}</style>
      </>
    );
  }
);

RadioButtons.displayName = 'RadioButtons';

export default RadioButtons;
