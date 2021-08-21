const Separator = ({ vertical, margin = '1.6rem' }) => {
  return (
    <>
      <div></div>

      <style jsx>{`
        div {
          width: ${vertical ? '1px' : '100%'};
          height: ${vertical ? '100%' : '1px'};
          margin: ${vertical ? `0 ${margin}` : `${margin} 0`};
          background-color: var(--border);
        }
      `}</style>
    </>
  );
};

export default Separator;
