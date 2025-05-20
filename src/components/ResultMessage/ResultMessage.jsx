import { useMemo } from 'react';
import { useQuiz } from '@hooks';
import { getPluralAnswer } from '@utils';
import { RESULT_MODES } from '@constants';
import cl from './ResultMessage.module.css';

export const ResultMessage = () => {
  const {quiz} = useQuiz();

  const window = useMemo(() => {
    if (quiz.answersCorrect && quiz.answersWrong === 0) return RESULT_MODES.correct;
    if (quiz.answersCorrect === 0 && quiz.answersWrong) return RESULT_MODES.wrong;
    return RESULT_MODES.passed;
  }, [quiz.answersCorrect, quiz.answersWrong]);

  switch (window) {
    case RESULT_MODES.correct:
      return <h2>Ты ответил правильно<br/>на все вопросы. Так держать!</h2>;
    case RESULT_MODES.wrong:
      return <h2>Ты не ответил ни на один вопрос.<br/>Попробуй еще!</h2>;
    case RESULT_MODES.passed:
      return <h2>
        Ты ответил правильно <br/> на <span
        className={cl.correct}>{quiz.answersCorrect}</span> {getPluralAnswer('question', quiz.answersCorrect)} и
        сделал <span
        className={cl.wrong}>{quiz.answersWrong}</span> {getPluralAnswer('wrong', quiz.answersWrong)}.
      </h2>;
  }
};