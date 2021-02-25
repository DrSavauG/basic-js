module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (isNaN(date.getTime())) throw new Error();
  return ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'][date.getMonth()];
};
