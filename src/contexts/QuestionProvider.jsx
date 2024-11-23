import { createQuestions } from '@/utils/createQuestions.js';
import { createContext, useContext, useState } from 'react';

const QuestionContext = createContext({});
const QuestionActionsContext = createContext({});


export const QuestionProvider = ({ children }) => {
  const [questionCount, setQuestionCount] = useState(1)
  const [questionPool, setQuestionsPool] = useState([])
  
  const createQuestionPool = () => {
    setQuestionsPool(createQuestions(questionCount))
  }
  
  const resetQuestionPool = () => {
    setQuestionsPool([])
  }
  
  const value = { questionCount, questionPool }
  const actions = { setQuestionCount, createQuestionPool, resetQuestionPool }
  
  return (
    <QuestionContext.Provider value={value}>
      <QuestionActionsContext.Provider value={actions}>
        {children}
      </QuestionActionsContext.Provider>
    </QuestionContext.Provider>
  )
}

export const useQuestion = () => {
  return useContext(QuestionContext);
}

export const useQuestionActions = () => {
  return useContext(QuestionActionsContext);
}
