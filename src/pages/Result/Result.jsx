import resultImg from '@assets/badges/result.png';
import { useQuizActions } from '@hooks';
import { BUTTON_QUIZ_TEXT } from '@constants';
import { ResultMessage } from '@components';
import { Button } from '@UI';
import cl from './Result.module.css';

export const Result = () => {
  const {resetQuiz} = useQuizActions();

  return (
    <>
      <img className={cl.badge} src={resultImg} alt="Result badge"/>

      <div className={cl.result}>
        <h1>Результат</h1>
        <ResultMessage/>
      </div>

      <Button onClick={resetQuiz}>
        {BUTTON_QUIZ_TEXT.retry}
      </Button>
    </>
  );
};
