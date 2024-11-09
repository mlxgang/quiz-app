import { Card } from '@components/UI/Card/Card.jsx';
import { Button } from '@components/UI/Button/Button.jsx';
import cl from './StartQuiz.module.css'
import close from '@assets/icons/40/close.svg'
import { useState } from 'react';
import cameroon from '@assets/countries/Cameroon.webp'

const data = {
    question: 'Флаг какой страны изображен?',
    answers: [{id: 1, country: 'Камерун'},
        {id: 2, country: 'Нигерия'},
        {id: 3, country: 'Центрально-Африканская Республика'},
        {id: 4, country: 'Гаити'}],
}

const questionCount = 18

export const StartQuiz = () => {

    const [isDisabled, setIsDisabled] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(1)

    return (
        <>
            <button className={cl.close}>
                <img src={close} alt="Close button"/>
            </button>
            <Card>
                <div className={cl.title}>
                    <img className={cl.flag} src={cameroon} alt="Qusetion flag"/>
                    <h2>{data.question}</h2>
                </div>
                <div className={cl.answers}>
                    {data.answers.map((answer, index) =>
                        <Button variant="secondary" key={answer.id}>
                            <div className={cl.answer}>
                                <span className={cl.index}>{index + 1}</span>
                                <span className={cl.country}>{answer.country}</span>
                            </div>
                        </Button>,
                    )}
                </div>
                <div className={cl.footer}>
                    <Button variant="primary" disabled={isDisabled}>
                        Ответить
                    </Button>
                    <span className={cl.remaining}>{currentQuestion + ' / ' + questionCount}</span>
                </div>

            </Card>
        </>
    )
}
