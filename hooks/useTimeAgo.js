const DATE_UNITS = [
  ['year', 31556900],
  ['month', 2629750],
  ['week', 604800],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

const getDateDiffs = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

const useTimeAgo = (timestamp) => {
  const { value, unit } = getDateDiffs(timestamp);
  const rtf = new Intl.RelativeTimeFormat('es', {
    style: 'long',
  });
  return rtf.format(value, unit);
};

export default useTimeAgo;
