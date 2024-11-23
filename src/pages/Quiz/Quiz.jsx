import { Answer } from '@/components/Answer/Answer.jsx';
import { Question } from '@/components/Question/Question.jsx';
import { Button } from '@/components/UI/Button/Button.jsx';
import { Icon } from '@/components/UI/Icon/Icon.jsx';
import { useCurrentPage } from '@/contexts/CurrentPageProvider.jsx';
import { useQuestion, useQuestionActions } from '@/contexts/QuestionProvider.jsx';
import { useMemo, useState } from 'react';
import cl from './Quiz.module.css'

export const Quiz = () => {
  const { setPage } = useCurrentPage()
  const { questionPool } = useQuestion()
  const { resetQuestionPool } = useQuestionActions()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1)
  
  const currentQuestion = useMemo(() =>
      questionPool[currentQuestionIndex - 1]
    , [currentQuestionIndex, questionPool]);
  
  const nextButtonHandler = () => {
    if (currentQuestionIndex + 1 <= questionPool.length) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      setPage('result')
    }
  }
  
  const closeButtonHandler = () => {
    resetQuestionPool()
    setPage('welcome')
  }
  
  return (
    <>
      <button className={cl.close} onClick={closeButtonHandler}>
        <Icon className={cl['close-icon']} name="close"/>
      </button>
      
      <Question question={{ question: currentQuestion.question, flag: currentQuestion.flag }}/>
      <Answer answers={currentQuestion.answersPool}/>
      
      <div className={cl.footer}>
        <Button disabled={false} onClick={nextButtonHandler}>
          Ответить
        </Button>
        <span className={cl.remaining}>{currentQuestionIndex + ' / ' + questionPool.length}</span>
      </div>
    </>
  )
}
