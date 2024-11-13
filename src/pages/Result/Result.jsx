import resultImg from '@/assets/badges/result.png'
import { Button } from '@/components/UI/Button/Button.jsx';
import { useCurrentPage } from '@/contexts/CurrentPageProvider.jsx';
import { useState } from 'react';
import cl from './Result.module.css'

export const Result = () => {
  const { setPage } = useCurrentPage()
  const [result, setResult] = useState({ correct: 12, wrong: 6 })
  
  const resultText = {
    'correct': <h2>Ты ответил правильно<br/>на все вопросы. Так держать!</h2>,
    'wrong': <h2>Ты не ответил ни на один вопрос.<br/>Попробуй еще!</h2>,
    'passed': <h2>
      Ты ответил правильно <br/> на <span
      className={cl.correct}>{result.correct}</span> вопросов и
      сделал <span className={cl.wrong}>{result.wrong}</span> ошибок.
    </h2>
  }
  
  return (
    <>
      <img className={cl.badge} src={resultImg} alt="Result badge"/>
      
      <div className={cl.result}>
        <h1>Результат</h1>
        <div className={cl.details}>
          {result.correct && result.wrong && resultText.passed}
          {result.correct && !result.wrong && resultText.correct}
          {!result.correct && result.wrong && resultText.wrong}
        </div>
      </div>
      
      <Button onClick={() => setPage('welcome')}>
        Попробовать еще
      </Button>
    </>
  )
}
