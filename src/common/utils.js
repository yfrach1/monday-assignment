export const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};
export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
