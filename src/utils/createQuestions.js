import data from '@/mock/quizz_questions.json'
import { createAnswersPool } from '@/utils/createAnswersPool.js';
import { getRandomByNumber } from '@/utils/getRandomByNumber.js';

export const createQuestions = (questionCount) => {
  const { questions } = JSON.parse(JSON.stringify(data))
  const questionPool = []
  
  for (let i = 0; i < questionCount; i++) {
    const question = questions[getRandomByNumber(questions.length)]
    const questionIndex = questions.findIndex(item => item === question)
    questions.splice(questionIndex, 1)
    
    questionPool.push({
      ...question,
      answersPool: createAnswersPool(question.correctAnswer)
    })
  }
  return questionPool
}