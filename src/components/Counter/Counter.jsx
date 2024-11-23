import { Icon } from '@/components/UI/Icon/Icon.jsx';
import { MAX_QUESTIONS, MIN_QUESTIONS } from '@/constants/constants.js';
import { useQuestion, useQuestionActions } from '@/contexts/QuestionProvider.jsx';
import { useMemo } from 'react';
import cl from './Counter.module.css'

export const Counter = ({ title }) => {
  const { questionCount, questionPool } = useQuestion()
  const { setQuestionCount } = useQuestionActions()
  
  const isPoolEmpty = useMemo(() => {
      return questionPool.length <= 0
    },
    [questionPool]
  )
  
  const decrement = () => {
    if (questionCount > MIN_QUESTIONS && isPoolEmpty) {
      setQuestionCount(prev => Number(prev) - 1)
    }
  }
  
  const increment = () => {
    if (questionCount >= MAX_QUESTIONS) {
      setQuestionCount(MAX_QUESTIONS)
    } else if (isPoolEmpty) {
      setQuestionCount(prev => Number(prev) + 1)
    }
  }
  
  const inputHandler = (e) => {
    const { value } = e.target
    
    if (value <= MIN_QUESTIONS) {
      setQuestionCount(MIN_QUESTIONS)
    } else if (value >= MAX_QUESTIONS) {
      setQuestionCount(MAX_QUESTIONS)
    } else if (isPoolEmpty) {
      setQuestionCount(value)
    }
  }
  
  return (
    <div className={cl.container}>
      {title && <h2 className={cl.title}>{title}</h2>}
      <div className={cl.counter}>
        <button className={cl.button} onClick={decrement} disabled={questionCount === 1 || !isPoolEmpty}>
          <Icon className={cl.icon} name="minus"/>
        </button>
        <input className={cl.input} type="number" value={questionCount} onChange={(e) => inputHandler(e)}/>
        <button className={cl.button} onClick={increment} disabled={questionCount === 30 || !isPoolEmpty}>
          <Icon className={cl.icon} name="plus"/>
        </button>
      </div>
    </div>
  
  )
}