import { forwardRef } from 'react';
import { BREAKPOINTS } from 'utils/breakpoints';

const Section = forwardRef(
  (
    {
      id,
      children,
      width = '100%',
      height = 'max-content',
      margin,
      top,
      bottom,
    },
    ref
  ) => {
    return (
      <>
        <section ref={ref} id={id}>
          {children}
        </section>

        <style jsx>{`
          section {
            position: relative;
            width: ${width};
            height: ${height};
            margin: ${margin};
            padding-right: var(--mobile-padding);
            padding-left: var(--mobile-padding);
            padding-top: calc(${top} - 8px);
            padding-bottom: calc(${bottom} - 8px);
          }

          @media screen and (min-width: ${BREAKPOINTS.tab}) {
            section {
              padding-right: var(--desktop-padding);
              padding-left: var(--desktop-padding);
              padding-top: ${top};
              padding-bottom: ${bottom};
            }
          }
        `}</style>
      </>
    );
  }
);

export default Section;
