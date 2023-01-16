export const formatPriceUsd = (price) => {
  const options = {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  };
  const stringToInt = parseInt(price);
  return stringToInt.toLocaleString('en-US', options);
};

// const options = {
//   style: 'currency',
//   currency: 'USD',
//   maximumFractionDigits: 0,
// };
// // price is string convert to integer
// const stringToInt = parseInt(house.price);
// const formatNumber = stringToInt.toLocaleString('en-US', options);
