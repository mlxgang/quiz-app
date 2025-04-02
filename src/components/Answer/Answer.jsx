import { useQuiz } from '@/contexts/QuizProvider.jsx';
import { AnswerButton } from '@/components';
import cl from './Answer.module.css';

export const Answer = () => {
  const {quiz} = useQuiz();

  return (
    <div>
      <ol className={cl.answers}>
        {quiz.answers.map((answer, i) =>
          <li key={answer}>
            <AnswerButton
              answer={answer}
              disabled={quiz.answerState !== null}
              index={i + 1}
            />
          </li>
        )}
      </ol>
    </div>
  );
};