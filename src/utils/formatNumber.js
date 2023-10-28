const formatNumber = (stat) => {
  // If number is less than 10,000
  if (String(stat).length <= 4) {
    return String(stat);
  }
  // If number is greater than or equal to 10,000
  while (String(stat).length < 2) {
    stat = stat / 10;
  }
  return String(`${stat}k`);
};

export default formatNumber;
