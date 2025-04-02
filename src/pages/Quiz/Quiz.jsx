import { useMemo } from 'react';
import { useCurrentPage } from '@/contexts/CurrentPageProvider.jsx';
import { useQuiz, useQuizActions } from '@/contexts/QuizProvider.jsx';
import { Answer, Question } from '@/components';
import { useKeyboardClick } from '@/hooks';
import { Button, Icon } from '@UI';
import { BUTTON_QUIZ_TEXT, PAGES } from '@/constants';
import cl from './Quiz.module.css';

export const Quiz = () => {
  const {setPage} = useCurrentPage();
  const {quiz} = useQuiz();
  const {resetQuiz, buttonHandler} = useQuizActions();

  const closeButtonHandler = () => {
    resetQuiz();
    setPage(PAGES.welcome);
  };

  useKeyboardClick(closeButtonHandler, 'r', 'к');

  const buttonText = useMemo(() => {
    if (quiz.answerState === null) {
      return BUTTON_QUIZ_TEXT.answer;
    } else {
      return BUTTON_QUIZ_TEXT.next;
    }
  }, [quiz.answerState]);


  return (
    <>
      <button className={cl.close} onClick={closeButtonHandler}>
        <Icon className={cl['close-icon']} name="close"/>
      </button>

      <Question/>
      <Answer/>

      <div className={cl.footer}>
        <Button disabled={!quiz.answerCandidate} onClick={buttonHandler} text={buttonText}/>
        <span className={cl.remaining}>{quiz.index + 1 + ' / ' + quiz.pool.length}</span>
      </div>
    </>
  );
};
