import resultImg from '@/assets/badges/result.png';
import { useCurrentPage } from '@/contexts/CurrentPageProvider.jsx';
import { useQuizActions } from '@/contexts/QuizProvider.jsx';
import { BUTTON_QUIZ_TEXT, PAGES } from '@/constants';
import { ResultMessage } from '@/components';
import { Button } from '@UI';
import cl from './Result.module.css';

export const Result = () => {
  const {setPage} = useCurrentPage();
  const {resetQuiz} = useQuizActions();

  const buttonHandler = () => {
    resetQuiz();
    setPage(PAGES.welcome);
  };

  return (
    <>
      <img className={cl.badge} src={resultImg} alt="Result badge"/>

      <div className={cl.result}>
        <h1>Результат</h1>
        <ResultMessage/>
      </div>

      <Button onClick={buttonHandler} text={BUTTON_QUIZ_TEXT.retry}/>
    </>
  );
};
