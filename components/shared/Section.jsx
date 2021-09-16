import { forwardRef } from 'react';
import { BREAKPOINTS } from 'utils/breakpoints';

const Section = forwardRef(
  ({
    children,
    width = '100%',
    height = 'max-content',
    margin,
    top,
    bottom,
  }, ref) => {
    return (
      <>
        <section ref={ref}>{children}</section>
        <style jsx>{`
          section {
            position: relative;
            width: ${width};
            height: ${height};
            margin: ${margin};
            padding-right: var(--mobile-padding);
            padding-left: var(--mobile-padding);
            padding-top: ${top};
            padding-bottom: ${bottom};
          }
          @media screen and (min-width: ${BREAKPOINTS.tab}) {
            section {
              padding-right: var(--desktop-padding);
              padding-left: var(--desktop-padding);
            }
          }
        `}</style>
      </>
    );
  }
);

export default Section;
