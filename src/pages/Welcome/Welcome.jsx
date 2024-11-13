import welcomeBadge from '@/assets/badges/welcome.png'
import { Button } from '@/components/UI/Button/Button.jsx';
import { Counter } from '@/components/UI/Counter/Counter.jsx';
import { useCurrentPage } from '@/contexts/CurrentPageProvider.jsx';
import cl from './Welcome.module.css'

export const Welcome = () => {
  const { setPage } = useCurrentPage()
  
  return (
    <>
      <img className={cl.badge} src={welcomeBadge} alt="Start quiz image"/>
      
      <div className={cl.title}>
        <h1>Добро пожаловать</h1>
        <h2>на викторину по странам<br/> и столицам!</h2>
      </div>
      
      <Counter title="Выбери количество вопросов:"/>
      
      <Button onClick={() => setPage('quiz')}>
        Начать
      </Button>
    </>
  )
}
