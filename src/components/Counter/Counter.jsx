import { useKeyboardClick, useQuiz, useQuizActions } from '@hooks';
import { KEYBOARD_BUTTONS, MAX_QUESTIONS, MIN_QUESTIONS, PATTERNS } from '@constants';
import { Icon } from '@UI';
import cl from './Counter.module.css';

export const Counter = ({title}) => {
  const {quiz} = useQuiz();
  const {setQuestionCount} = useQuizActions();

  const decrement = () => {
    if (quiz.count > MIN_QUESTIONS) setQuestionCount(quiz.count - 1);
  };

  const increment = () => {
    if (quiz.count < MAX_QUESTIONS) setQuestionCount(quiz.count + 1);
    if (isNaN(quiz.count)) setQuestionCount(1);
  };

  useKeyboardClick(decrement, KEYBOARD_BUTTONS.ArrowLeft);
  useKeyboardClick(increment, KEYBOARD_BUTTONS.ArrowRight);

  const inputHandler = (e) => {
    let {value} = e.target;
    value = value.replace(PATTERNS.removeZero, '');
    value = parseInt(value, 10);

    if (!isNaN(value)) setQuestionCount('');

    if (value <= 0) {
      value = 0;
    } else if (value > MAX_QUESTIONS) {
      value = MAX_QUESTIONS;
    }
    e.target.value = value;
    setQuestionCount(value);
  };

  return (
    <div className={cl.container}>
      {title && <h2 className={cl.title}>{title}</h2>}
      <div className={cl.counter}>
        <button className={cl.button} onClick={decrement} disabled={quiz.count <= 1 || isNaN(quiz.count)}>
          <Icon className={cl.icon} name="minus"/>
        </button>
        <input
          className={cl.input}
          type="number"
          value={quiz.count}
          onInput={inputHandler}
          min={MIN_QUESTIONS}
          max={MAX_QUESTIONS}
          step="1"
        />
        <button
          className={cl.button}
          onClick={increment}
          disabled={quiz.count >= MAX_QUESTIONS}
        >
          <Icon className={cl.icon} name="plus"/>
        </button>
      </div>
    </div>

  );
};