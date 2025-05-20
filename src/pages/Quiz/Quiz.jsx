import { useMemo } from 'react';
import { useKeyboardClick, useQuiz, useQuizActions } from '@hooks';
import { Answer, Question } from '@components';
import { Button, Icon, Loader } from '@UI';
import { BUTTON_QUIZ_TEXT, KEYBOARD_BUTTONS } from '@constants';
import cl from './Quiz.module.css';

export const Quiz = () => {
  const {quiz} = useQuiz();
  const {resetQuiz, nextButtonHandler, setAnswerCandidate} = useQuizActions();

  useKeyboardClick(resetQuiz, 'r', 'к');
  useKeyboardClick(() => setAnswerCandidate(null), KEYBOARD_BUTTONS.Backspace);

  const buttonText = useMemo(() => {
    if (quiz.answerState === null) {
      return BUTTON_QUIZ_TEXT.answer;
    } else {
      return BUTTON_QUIZ_TEXT.next;
    }
  }, [quiz.answerState]);


  return (
    <>
      <button className={cl.close} onClick={resetQuiz}>
        <Icon className={cl['close-icon']} name="close"/>
      </button>

      <Question/>
      <Answer/>

      <div className={cl.footer}>
        <Button
          disabled={!quiz.answerCandidate || quiz.isLoading}
          onClick={nextButtonHandler}
        >
          {quiz.isLoading
            ? <Loader/>
            : buttonText
          }
        </Button>
        <span className={cl.remaining}>{quiz.index + 1 + ' / ' + quiz.pool.length}</span>
      </div>
    </>
  );
};
