import { createContext, useContext, useState } from 'react';

const QuestionCountContext = createContext({});

export const useQuestionCount = () => {
  return useContext(QuestionCountContext);
}

export const QuestionCountProvider = ({ children }) => {
  const [questionCount, setQuestionCount] = useState(18)
  
  return (
    <QuestionCountContext.Provider value={{ questionCount, setQuestionCount }}>
      {children}
    </QuestionCountContext.Provider>
  )
}