import data from '@mock/quizz_questions.json';
import { MAX_ANSWERS } from '@constants';
import { getRandomByNumber } from '@utils';

export const createAnswersPool = (correctAnswer, excludeAnswers) => {
  const {countries} = JSON.parse(JSON.stringify(data));
  const answersPool = [];

  const correctAnswerIndex = countries.findIndex(item => item === correctAnswer && !excludeAnswers.includes(item));
  countries.splice(correctAnswerIndex, 1);
  const correctAnswerPoolIndex = getRandomByNumber(MAX_ANSWERS);

  for (let i = 0; i < MAX_ANSWERS; i++) {
    if (i === correctAnswerPoolIndex) {
      answersPool.push(correctAnswer);
    } else {
      const wrongAnswer = countries[getRandomByNumber(countries.length)];
      const wrongAnswerIndex = countries.findIndex(item => item === wrongAnswer);
      countries.splice(wrongAnswerIndex, 1);

      answersPool.push(wrongAnswer);
    }
  }
  return answersPool;
};