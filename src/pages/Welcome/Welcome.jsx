import welcomeBadge from '@assets/badges/welcome.png';
import { useQuiz, useQuizActions } from '@hooks';
import { BUTTON_QUIZ_TEXT, MAX_QUESTIONS } from '@constants';
import { Counter } from '@components';
import { Button, Loader } from '@UI';
import cl from './Welcome.module.css';
import { useMemo } from 'react';

export const Welcome = () => {
  const {quiz} = useQuiz();
  const {startQuiz} = useQuizActions();

  const isDisabled = useMemo(() => (
    quiz.count === 0 || quiz.count > MAX_QUESTIONS || isNaN(quiz.count) || quiz.isLoading
  ), [quiz.count, quiz.isLoading]);

  return (
    <>
      <img className={cl.badge} src={welcomeBadge} alt="Start quiz image"/>

      <div className={cl.title}>
        <h1>Добро пожаловать</h1>
        <h2>на викторину по странам<br/> и столицам!</h2>
      </div>

      <Counter title="Выбери количество вопросов:"/>

      <Button
        onClick={startQuiz}
        disabled={isDisabled}
      >
        {quiz.isLoading
          ? <Loader/>
          : BUTTON_QUIZ_TEXT.start
        }
      </Button>
    </>
  );
};
