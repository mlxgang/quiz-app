import { useContext } from 'react';
import { QuestionActionsContext, QuestionContext } from '@contexts/QuizProvider.jsx';

export const useQuiz = () => {
  return useContext(QuestionContext);
};

export const useQuizActions = () => {
  return useContext(QuestionActionsContext);
};