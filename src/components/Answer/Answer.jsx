import { RadioButton } from '@/components/RadioButton/RadioButton.jsx';
import cl from './Answer.module.css';

/**
 *
 * @param {Array.<string>} answers - answers pool for question
 *
 * */

export const Answer = ({ answers }) => {
  return (
    <ol>
      <form className={cl.answers}>
        {answers.map(answer =>
          <RadioButton answer={answer} key={answer}/>
        )}
      </form>
    </ol>
  )
}