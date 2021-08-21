/* eslint-disable func-names */
/* eslint-disable prefer-rest-params */
function debounce(func, wait) {
  let timeoutId;
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const context = this;
    const args = arguments;
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

export default debounce;
