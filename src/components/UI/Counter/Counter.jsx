import { Icon } from '@/components/UI/Icon/Icon.jsx';
import { useQuestionCount } from '@/contexts/QuestionCountProvider.jsx';
import cl from './Counter.module.css'

export const Counter = ({ title }) => {
  
  const { questionCount, setQuestionCount } = useQuestionCount()
  
  const decrement = () => {
    if (questionCount > 1) {
      setQuestionCount(prev => prev - 1)
    }
  }
  
  const increment = () => {
    setQuestionCount(prev => prev + 1)
  }
  
  const inputHandler = (e) => {
    const { value } = e.target
    
    if (value <= 0) {
      setQuestionCount(1)
    } else {
      setQuestionCount(value)
    }
  }
  
  return (
    <div className={cl.container}>
      {title && <h2 className={cl.title}>{title}</h2>}
      <div className={cl.counter}>
        <button className={cl.button} onClick={decrement}>
          <Icon className={cl.icon} name="minus"/>
        </button>
        <input className={cl.input} type="number" value={questionCount} onChange={(e) => inputHandler(e)}/>
        <button className={cl.button} onClick={increment}>
          <Icon className={cl.icon} name="plus"/>
        </button>
      </div>
    </div>
  
  )
}