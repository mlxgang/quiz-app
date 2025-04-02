import { createContext, useContext, useEffect, useState } from 'react';
import { useCurrentPage } from '@/contexts/CurrentPageProvider.jsx';
import { createAnswersPool, createQuestions } from '@/utils';
import { MIN_QUESTIONS, PAGES } from '@/constants';

const QuestionContext = createContext({});
const QuestionActionsContext = createContext({});

const initQuiz = {
  count: MIN_QUESTIONS,
  pool: [],
  question: null,
  index: null,
  answersCorrect: 0,
  answersWrong: 0,
};

const initQuestion = {
  answers: [],
  answerCandidate: null,
  answerState: null,
};

export const QuizProvider = ({children}) => {
    const {setPage} = useCurrentPage();

    const [usedAnswers, setUsedAnswers] = useState([]);
    const [quiz, setQuiz] = useState({...initQuiz, ...initQuestion});

    useEffect(() => {
      if (quiz.index !== null) {
        setQuiz(prev => ({
          ...prev,
          ...initQuestion
        }));
        createQuestion();
      }
    }, [quiz.index]);

    const startQuiz = () => {
      createQuestionPool();

      setQuiz(prev => ({
        ...prev,
        index: 0,
        question: prev.pool[0]
      }));
    };

    const resetQuiz = () => {
      setQuiz({...initQuiz, ...initQuestion});
    };

    const createQuestion = () => {
      setQuiz(prev => {
          const newQuestion = prev.pool[quiz.index];

          return {
            ...prev,
            question: newQuestion,
            answers: createAnswersPool(newQuestion.correctAnswer, usedAnswers)
          };
        }
      );
    };

    const setQuestionCount = (count) => {
      setQuiz(prev => ({
        ...prev,
        count,
      }));
    };

    const createQuestionPool = () => {
      setQuiz(prev => ({
        ...prev,
        pool: createQuestions(prev.count)
      }));
    };

    const buttonHandler = () => {
      if (!quiz.pool.length) {
        createQuestionPool();
        return;
      }

      if (quiz.answerState === null) {
        checkAnswer();
        return;
      }

      if (quiz.index + 1 === quiz.pool.length) {
        setPage(PAGES.result);
        return;
      }

      if (quiz.index + 1 <= quiz.pool.length) {
        const index = quiz.index + 1;

        setQuiz(prev => ({
          ...prev,
          index,
        }));
      }
    };

    const setAnswerCandidate = (value) => {
      if (quiz.answerState === null) {
        setQuiz(prev => ({
          ...prev,
          answerCandidate: value
        }));
      }
    };

    const checkAnswer = () => {
      if (quiz.answerCandidate === quiz.question.correctAnswer) {
        setUsedAnswers(prev => [...prev, quiz.answerCandidate]);
        setQuiz(prev => ({
          ...prev,
          answersCorrect: prev.answersCorrect + 1,
          answerState: true
        }));
      } else {
        setQuiz(prev => ({
          ...prev,
          answersWrong: prev.answersWrong + 1,
          answerState: false
        }));
      }
    };

    const value = {quiz, usedAnswers};
    const actions = {
      startQuiz,
      resetQuiz,
      createQuestionPool,
      setQuestionCount,
      setAnswerCandidate,
      checkAnswer,
      buttonHandler
    };

    return (
      <QuestionContext.Provider value={value}>
        <QuestionActionsContext.Provider value={actions}>
          {children}
        </QuestionActionsContext.Provider>
      </QuestionContext.Provider>
    );
  }
;

export const useQuiz = () => {
  return useContext(QuestionContext);
};

export const useQuizActions = () => {
  return useContext(QuestionActionsContext);
};
