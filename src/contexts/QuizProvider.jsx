import { createContext, useEffect, useState } from 'react';
import { useCurrentPage } from '@hooks';
import { createAnswersPool, createQuestions } from '@utils';
import { MIN_QUESTIONS, PAGES } from '@constants';

export const QuestionContext = createContext({});
export const QuestionActionsContext = createContext({});

const initQuiz = {
  count: MIN_QUESTIONS,
  pool: [],
  question: null,
  index: null,
  answersCorrect: 0,
  answersWrong: 0,
  isLoading: false
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

      setPreloader(() => {
        setQuiz(prev => ({
          ...prev,
          index: 0,
          question: prev.pool[0]
        }));
        setPage(PAGES.quiz);
      });
    };

    const resetQuiz = () => {
      setQuiz({...initQuiz, ...initQuestion});
      setPage(PAGES.welcome);
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

    const nextButtonHandler = () => {
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
      if (quiz.isLoading) return;

      if (quiz.answerState === null) {
        setQuiz(prev => ({
          ...prev,
          answerCandidate: value
        }));
      }
    };

    const checkAnswer = () => {
      setPreloader(() => {
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
      });
    };

    const setPreloader = (callback) => {
      setQuiz(prev => ({
        ...prev,
        isLoading: true
      }));

      setTimeout(() => {
        setQuiz(prev => ({
          ...prev,
          isLoading: false
        }));
        callback();
      }, 1500);
    };

    const value = {quiz, usedAnswers};
    const actions = {
      startQuiz,
      resetQuiz,
      createQuestionPool,
      setQuestionCount,
      setAnswerCandidate,
      checkAnswer,
      nextButtonHandler
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
