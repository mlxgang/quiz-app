import country from '@/assets/countries/Country_1.webp'
import { Button } from '@/components/UI/Button/Button.jsx';
import { Icon } from '@/components/UI/Icon/Icon.jsx';
import { useCurrentPage } from '@/contexts/CurrentPageProvider.jsx';
import { useQuestionCount } from '@/contexts/QuestionCountProvider.jsx';
import { useState } from 'react';
import cl from './Quiz.module.css'

const data = [
  {
    question: 'Флаг какой страны изображен?',
    answers: [
      { id: 1, text: 'Камерун' },
      { id: 2, text: 'Нигерия' },
      { id: 3, text: 'Центрально-Африканская Республика' },
      { id: 4, text: 'Гаити' }
    ]
  }
]

export const Quiz = () => {
  const { setPage } = useCurrentPage()
  const { questionCount } = useQuestionCount()
  const [isDisabled, setIsDisabled] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  
  return (
    <>
      <button className={cl.close} onClick={() => setPage('welcome')}>
        <Icon className={cl['close-icon']} name="close"/>
      </button>
      
      <figure className={cl.title}>
        <img className={cl.flag} src={country} alt="Qusetion image"/>
        <figcaption>{data[currentQuestion - 1].question}</figcaption>
      </figure>
      <ol className={cl.answers}>
        {data[currentQuestion - 1].answers.map((answer) =>
          <li className={cl.answer} key={answer.id}>
            <button className={cl['answer-button']}>
              {answer.text}
            </button>
          </li>
        )}
      </ol>
      <div className={cl.footer}>
        <Button disabled={isDisabled} onClick={() => setPage('result')}>
          Ответить
        </Button>
        <span className={cl.remaining}>{currentQuestion + ' / ' + questionCount}</span>
      </div>
    </>
  )
}
