const formatNumber = (stat) => {
  let statString = String(stat);
  // If number is less than 10,000
  if (statString.length <= 4) {
    return statString;
  }

  // If number is greater than or equal to 10,000
  statString = statString.split(0, 2)[0];
  return `${statString}k`;
};

export default formatNumber;
