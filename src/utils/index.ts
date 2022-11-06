const getRandom = (min = 0, max = 255) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getColor = () => {
  return `rgb(${getRandom()},${getRandom()},${getRandom()})`;
};
