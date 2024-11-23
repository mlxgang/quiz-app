import cl from './RadioButton.module.css';

/**
 *
 * @param {string} answer - name of current answer
 *
 * */

export const RadioButton = ({ answer }) => {
  return (
    <li className={cl.answer}>
      <label className={cl['answer-button']}>
        {answer}
        <input type="radio" name="answer" value={answer} className={cl.input}/>
      </label>
    </li>
  )
}