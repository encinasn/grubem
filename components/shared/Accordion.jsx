const Accordion = ({ title, open, children }) => {
  return (
    <>
      <details>
        <summary open={open}>{title}</summary>
        {children}
      </details>

      <style jsx>{``}</style>
    </>
  );
};

export default Accordion;
