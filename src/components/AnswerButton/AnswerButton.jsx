import { useMemo } from 'react';
import { KEYBOARD_BUTTONS } from '@constants';
import { useKeyboardClick, useQuiz, useQuizActions } from '@hooks';
import { cls } from '@utils';
import { Icon } from '@UI';
import cl from './AnswerButton.module.css';

/**
 *
 * @param {string} answer    - current answer
 * @param {Boolean} disabled - is button disabled
 * @param {number}  index    - current answer index
 *
 * */

export const AnswerButton = ({answer, disabled, index}) => {
  const {setAnswerCandidate} = useQuizActions();
  const {quiz} = useQuiz();

  const buttonHandler = () => {
    setAnswerCandidate(answer);
  };

  useKeyboardClick(buttonHandler, KEYBOARD_BUTTONS[index]);
  
  const stateAnswer = useMemo(() => {
    switch (quiz.answerState) {
      case null:
        break;
      case true:
        return answer === quiz.question.correctAnswer && 'correct';
      case false:
        if (answer === quiz.answerCandidate) return 'wrong';
        if (answer === quiz.question.correctAnswer) return 'correct';
    }
  }, [quiz.answerState]);

  return (
    <button
      disabled={disabled}
      type="button"
      className={cls(
        cl.answer,
        cl[stateAnswer],
        answer === quiz.answerCandidate
          ? cl.checked : '',
        quiz.answerState !== null
          ? cl.blocked : ''
      )}
      onClick={buttonHandler}
    >
      <span className={cl.title}>{answer}</span>
      {stateAnswer && <Icon name={stateAnswer} className={cl.icon}/>}
    </button>
  );
};