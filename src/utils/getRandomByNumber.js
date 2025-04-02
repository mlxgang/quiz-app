/**
 *
 * @param maxNumber {number} - max number which will be generated
 *
 * **/

export const getRandomByNumber = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber);
};