const MiniSpinner = () => {
  return (
    <>
      <div className="spinner"></div>

      <style jsx>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border-left-color: var(--white-color);

          animation: spin .8s ease infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default MiniSpinner;
