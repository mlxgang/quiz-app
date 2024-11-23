import cl from './Question.module.css';

/**
 *
 * @param {Object} question          - object with text of question and flag`s url
 * @param {string} question.flag     - svg url with flag
 * @param {string} question.question - text of question
 *
 * */

export const Question = ({ question }) => {
  return (
    <figure className={cl.question}>
      <img className={cl.flag} src={question.flag} alt="Qusetion image"/>
      <figcaption>{question.question}</figcaption>
    </figure>
  )
}