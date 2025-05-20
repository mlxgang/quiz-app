import { PLURALIZE_ANSWERS } from '@constants/index.js';

/**
 *
 * @param type   {'question'|'wrong'} - type of word (/constants/PLURALIZE_ANSWERS)
 * @param number {number}             - number which will be
 *
 * **/

const excludeNumbers = [11, 12, 13, 14];

export const getPluralAnswer = (type, number) => {
  const lastChar = number.toString().slice(-1);

  if (excludeNumbers.includes(number)) return PLURALIZE_ANSWERS[type].many;

  switch (lastChar) {
    case '1':
      return PLURALIZE_ANSWERS[type].once;
    case '2':
    case '3':
    case '4':
      return PLURALIZE_ANSWERS[type].some;
    default:
      return PLURALIZE_ANSWERS[type].many;
  }
};

