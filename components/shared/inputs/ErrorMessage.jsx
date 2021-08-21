const ErrorMessage = ({errorMessage}) => {
  return (
    <>
      <p>{errorMessage !== undefined && errorMessage.message}</p>

      <style jsx>{`
        p {
          line-height: 1.2rem;
          width: 100%;
          height: 16px;
          padding: 4px 2px 0;
          font-size: var(--small-font-size);
          font-weight: 400;
          color: var(--error-color);
        }
      `}</style>
    </>
  );
};

export default ErrorMessage;
