import { forwardRef, useState } from 'react';
//import components.
import Label from './Label';
import ErrorMessage from './ErrorMessage';
//import icons.
import {
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineMail,
  HiOutlineLockClosed,
} from 'react-icons/hi';

const InputLogin = forwardRef(
  (
    {
      type,
      name,
      placeholder,
      label,
      disabled,
      errorMessage,
      width = '100%',
      icon,
    },
    ref
  ) => {
    const [show, setShow] = useState(false);

    return (
      <>
        <div className="wrapper">
          <Label label={label} name={name} disabled={disabled} />
          <div className="input__wrapper">
            {icon && (
              <div className="icon">
                {icon === 'email' && <HiOutlineMail size="2rem" />}
                {icon === 'password' && <HiOutlineLockClosed size="2rem" />}
              </div>
            )}

            {type === 'password' ? (
              <input
                type={show ? 'text' : 'password'}
                placeholder={placeholder}
                name={name}
                onBlur={ref?.onBlur}
                onChange={ref?.onChange}
                ref={ref?.ref}
                disabled={disabled}
                autoComplete="off"
              />
            ) : (
              <input
                type={type}
                placeholder={placeholder}
                name={name}
                onBlur={ref?.onBlur}
                onChange={ref?.onChange}
                ref={ref?.ref}
                disabled={disabled}
              />
            )}
            {type === 'password' && (
              <div className="show_password" onClick={() => setShow(!show)}>
                {show ? (
                  <HiOutlineEyeOff size="2rem" />
                ) : (
                  <HiOutlineEye size="2rem" />
                )}
              </div>
            )}
          </div>
          <ErrorMessage errorMessage={errorMessage} />
        </div>

        <style jsx>{`
          .wrapper {
            width: 100%;
          }

          .input__wrapper {
            position: relative;
            z-index: 10;
          }

          input {
            height: var(--large-height);
            line-height: 40px;
            width: ${width};
            padding-left: ${icon ? '40px' : '10px'};
            padding-right: 40px;
            background: var(--background);
            border-radius: var(--normal-radius);
            border: 3px solid transparent;
            transition: 0.3s ease all;
            outline: none;
            border: 2px solid
              ${errorMessage !== undefined
                ? 'var(--error-color) !important;'
                : 'var(--border);'};
          }
          input:focus {
            background: var(--background);
            border: 2px solid var(--black);
            outline: none;
            box-shadow: 0 0 0 0.1875em
              ${errorMessage !== undefined
                ? 'rgb(255, 209, 0, 0.0)'
                : 'var(--grey-100)'};
          }

          input[disabled] {
            background-color: var(--grey-300);
            border: 2px solid var(--grey-300);
            outline: none;
          }

          .icon {
            position: absolute;
            display: flex;
            align-items: center;
            left: 12px;
            top: 50%;
            z-index: 100;
            transform: translateY(-50%);
            color: var(--grey-700);
            user-select: none;
          }

          .show_password {
            position: absolute;
            display: flex;
            align-items: center;
            right: 12px;
            top: 50%;
            z-index: 100;
            transform: translateY(-50%);
            color: var(--grey-700);
            user-select: none;
            cursor: pointer;
          }
        `}</style>
      </>
    );
  }
);

InputLogin.displayName = 'InputLogin';

export default InputLogin;
