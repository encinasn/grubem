/* eslint-disable no-return-assign */
import { useLayoutEffect } from 'react';

function useLockBodyScroll() {
  useLayoutEffect(() => {
    // obtiene el scroll original del body
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Previene el scroll al montarse
    document.body.style.overflow = 'hidden';
    // Reactiva el scroll al desmontarse
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}

export default useLockBodyScroll;
