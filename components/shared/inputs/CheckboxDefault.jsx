import { forwardRef } from 'react';
//Import iconos.
import { FaCheck } from 'react-icons/fa';

const CheckboxDefault = forwardRef(
  ({ label, name, checked, manageChecked, disabled }, ref) => {
    const handleChange = () => {
      manageChecked(!checked);
    };

    return (
      <>
        <section>
          <div>
            {checked && (
              <div className="icon" onClick={handleChange}>
                <FaCheck size="12px" />
              </div>
            )}
            <input
              type="checkbox"
              name={name}
              id={name}
              disabled={disabled}
              checked={checked}
              onChange={handleChange}
              ref={ref?.ref}
            />
          </div>
          <label htmlFor={name}>{label}</label>
        </section>

        <style jsx>{`
          section {
            display: flex;
            align-items: center;
            justify-content: center;
            width: max-content;
            margin: 10px 0;
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
            border: 2px solid var(--mid-gray);
            border-radius: 4px;
            appearance: none;
            -webkit-appearance: none;
            cursor: pointer;
            outline: none;
          }
          input:hover {
            border: 2px solid var(--first-yellow);
            background-color: var(--xlight-gray);
          }
          input:checked {
            border: 3px solid var(--first-yellow);
            background-color: var(--first-yellow);
          }
          input[disabled] {
            border: 3px solid var(--mid-gray);
            background-color: var(--mid-gray);
            pointer-events: none;
            cursor: not-allowed;
          }

          label {
            margin-left: 6px;
            font-size: var(--normal-font-size);
            font-weight: 600;
            cursor: pointer;
          }

          .icon {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 50%;
            left: 50%;
            color: var(--white-color);
            transform: translate(-50%, -50%);
            cursor: pointer;
          }
        `}</style>
      </>
    );
  }
);

CheckboxDefault.displayName = 'CheckboxDefault'

export default CheckboxDefault;
