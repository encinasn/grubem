import { useState, forwardRef } from 'react';
// icons
import { FaCheck } from 'react-icons/fa';

const CheckboxForm = forwardRef(
  ({ label, name, checked = false, manageChecked, disabled }, ref) => {
    const [state, setState] = useState(checked)

    const handleChange = (e) => {
      ref?.onChange(e)
      setState(!state);
    };

    return (
      <>
        <div className="wrapper">
          <label htmlFor={name}>
            <span>{label}</span>
            <div>
              <input
                type="checkbox"
                name={name}
                id={name}
                disabled={disabled}
                checked={state}
                onChange={handleChange}
                ref={ref?.ref}
              />
              {state && (
                <div className="icon" onClick={handleChange}>
                  <FaCheck size="12px" />
                </div>
              )}
            </div>
          </label>
        </div>

        <style jsx>{`
          .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: max-content;
            padding: 1.6rem 0 1.6rem;
          }

          div {
            position: relative;
            height: 20px;
            width: 20px;
          }

          input {
            height: 100%;
            width: 100%;
            background: none;
            border: 2px solid var(--grey-300);
            border-radius: 4px;
            appearance: none;
            -webkit-appearance: none;
            cursor: pointer;
            outline: none;
          }
          input:hover {
            border: 2px solid var(--black);
            background-color: var(--grey-100);
          }
          input:checked {
            border: 3px solid var(--black);
            background-color: var(--black);
          }
          input[disabled] {
            border: 3px solid var(--grey-300);
            background-color: var(--grey-300);
            pointer-events: none;
            cursor: not-allowed;
          }

          label {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-gap: 0 1.2rem;
            align-items: center;
            width: 100%;
            height: var(--large-height);
            padding: 0 1.2rem;
            font-size: var(--normal-font-size);
            font-weight: 600;
            border: 2px solid var(--border);
            border-radius: var(--normal-radius);
            cursor: pointer;
          }

          .icon {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 50%;
            left: 50%;
            color: var(--white);
            transform: translate(-50%, -50%);
            cursor: pointer;
            border: none;
            background: none;
            outline: none;
          }
        `}</style>
      </>
    );
  }
);

CheckboxForm.displayName = 'CheckboxForm';

export default CheckboxForm;
