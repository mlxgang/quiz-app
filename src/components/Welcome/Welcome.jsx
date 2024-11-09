import { Card } from '@components/UI/Card/Card.jsx';
import { Counter } from '@components/UI/Counter/Counter.jsx';
import startQuizImg from '@assets/startQuiz.png'
import { Button } from '@components/UI/Button/Button.jsx';
import cl from './Welcome.module.css'

export const Welcome = () => {

    return (
        <>
            <img className={cl.badge} src={startQuizImg} alt="Start quiz image"/>
            <Card>
                <div className={cl.title}>
                    <h1>Добро пожаловать</h1>
                    <h2>на викторину по странам<br/> и столицам!</h2>
                </div>

                <Counter title="Выбери количество вопросов:"/>

                <Button variant="primary">
                    Начать
                </Button>
            </Card>
        </>
    )
}
