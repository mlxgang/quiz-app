import data from '@/mock/quizz_questions.json';
import { getRandomByNumber } from '@/utils';

/**
 *
 * @param questionCount {number} - number of questions
 * @return {Array}
 *
 * **/

export const createQuestions = (questionCount) => {
  const {questions} = JSON.parse(JSON.stringify(data));
  const questionPool = [];

  for (let i = 0; i < questionCount; i++) {
    const question = questions[getRandomByNumber(questions.length)];
    const questionIndex = questions.findIndex(item => item === question);
    questions.splice(questionIndex, 1);

    questionPool.push(question);
  }
  return questionPool;
};