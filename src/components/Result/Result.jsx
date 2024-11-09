import cl from './Result.module.css'
import { Card } from '@components/UI/Card/Card.jsx';
import { Button } from '@components/UI/Button/Button.jsx';
import resultImg from '@assets/result.png'
import { useState } from 'react';

const correctAnswers = 12
const wrongAnswers = 6

export const Result = () => {

    const [screen, setScreen] = useState('testWrong')

    return (
        <>
            <Card>
                <img className={cl['result-image']} src={resultImg} alt=""/>
                <div className={cl.result}>
                    <h1>Результат</h1>
                    <div className={cl.details}>
                        {screen === 'testPassed' && <>
                            <h2>
                                Ты ответил правильно <br/> на <span className={cl.correct}>{correctAnswers}</span> вопросов и
                                сделал <span className={cl.wrong}>{wrongAnswers}</span> ошибок.
                            </h2>
                        </>}
                        {screen === 'testCorrect' && <>
                            <h2>Ты ответил правильно<br/>на все вопросы. Так держать!</h2>
                        </>}
                        {screen === 'testWrong' && <>
                            <h2>Ты не ответил ни на один вопрос.<br/>Попробуй еще!</h2>
                        </>}
                    </div>
                </div>
                <Button variant="primary">
                    Попробовать еще
                </Button>
            </Card>
        </>
    )
}
