import welcomeBadge from '@/assets/badges/welcome.png';
import { useCurrentPage } from '@/contexts/CurrentPageProvider.jsx';
import { useQuiz, useQuizActions } from '@/contexts/QuizProvider.jsx';
import { BUTTON_QUIZ_TEXT, MAX_QUESTIONS, PAGES } from '@/constants';
import { Counter } from '@/components';
import { Button } from '@UI';
import cl from './Welcome.module.css';

export const Welcome = () => {
  const {setPage} = useCurrentPage();
  const {quiz} = useQuiz();
  const {startQuiz} = useQuizActions();

  const buttonHandler = () => {
    startQuiz();
    setPage(PAGES.quiz);
  };

  return (
    <>
      <img className={cl.badge} src={welcomeBadge} alt="Start quiz image"/>

      <div className={cl.title}>
        <h1>Добро пожаловать</h1>
        <h2>на викторину по странам<br/> и столицам!</h2>
      </div>

      <Counter title="Выбери количество вопросов:"/>

      <Button
        onClick={buttonHandler}
        text={BUTTON_QUIZ_TEXT.start}
        disabled={quiz.count === 0 || quiz.count > MAX_QUESTIONS || isNaN(quiz.count)}
      />
    </>
  );
};
