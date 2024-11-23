import { MAX_ANSWERS } from '@/constants/constants.js';
import data from '@/mock/quizz_questions.json'
import { getRandomByNumber } from '@/utils/getRandomByNumber.js';

export const createAnswersPool = (correctAnswer) => {
  const { countries } = JSON.parse(JSON.stringify(data))
  const answersPool = []
  
  const correctAnswerIndex = countries.findIndex(item => item === correctAnswer)
  countries.splice(correctAnswerIndex, 1)
  const correctAnswerPoolIndex = getRandomByNumber(MAX_ANSWERS)
  
  for (let i = 0; i < MAX_ANSWERS; i++) {
    if (i === correctAnswerPoolIndex) {
      answersPool.push(correctAnswer)
    } else {
      const wrongAnswer = countries[getRandomByNumber(countries.length)]
      const wrongAnswerIndex = countries.findIndex(item => item === wrongAnswer)
      countries.splice(wrongAnswerIndex, 1)
      
      answersPool.push(wrongAnswer)
    }
  }
  return answersPool
}