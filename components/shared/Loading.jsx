import Spinner from '@shared/Spinner';

const Loading = () => {
  return (
    <>
      <div className="wrapper">
        <Spinner />
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default Loading;