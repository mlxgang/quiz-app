import welcomeBadge from '@/assets/badges/welcome.png'
import { Counter } from '@/components/Counter/Counter.jsx';
import { Button } from '@/components/UI/Button/Button.jsx';
import { useCurrentPage } from '@/contexts/CurrentPageProvider.jsx';
import { useQuestionActions } from '@/contexts/QuestionProvider.jsx';
import cl from './Welcome.module.css'

export const Welcome = () => {
  const { setPage } = useCurrentPage()
  const { createQuestionPool } = useQuestionActions()
  
  const buttonHandler = () => {
    setPage('quiz')
    createQuestionPool()
  }
  
  return (
    <>
      <img className={cl.badge} src={welcomeBadge} alt="Start quiz image"/>
      
      <div className={cl.title}>
        <h1>Добро пожаловать</h1>
        <h2>на викторину по странам<br/> и столицам!</h2>
      </div>
      
      <Counter title="Выбери количество вопросов:"/>
      
      <Button onClick={buttonHandler}>
        Начать
      </Button>
    </>
  )
}
