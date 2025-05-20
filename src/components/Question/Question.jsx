import { useQuiz } from '@hooks';
import cl from './Question.module.css';

export const Question = () => {
  const {quiz} = useQuiz();

  return (
    <figure className={cl.question}>
      <img className={cl.flag} src={quiz.question.flag} alt="Qusetion image"/>
      <figcaption>{quiz.question.question}</figcaption>
    </figure>
  );
};