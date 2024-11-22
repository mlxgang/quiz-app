import './App.module.css'
import { Footer } from '@/components/Footer/Footer.jsx';
import { Header } from '@/components/Header/Header.jsx';
import { Card } from '@/components/UI/Card/Card.jsx';
import { useCurrentPage } from '@/contexts/CurrentPageProvider.jsx';
import { QuestionCountProvider } from '@/contexts/QuestionCountProvider.jsx'
import { Quiz } from '@/pages/Quiz/Quiz.jsx';
import { Result } from '@/pages/Result/Result.jsx';
import { Welcome } from '@/pages/Welcome/Welcome.jsx';
import cl from './App.module.css'

const pages = {
  'welcome': <Welcome/>,
  'quiz': <Quiz/>,
  'result': <Result/>
}

export const App = () => {
  const { page } = useCurrentPage()
  
  return (
    <div className={cl.container}>
      <Header/>
      <QuestionCountProvider>
        <Card>
          {pages[page]}
        </Card>
      </QuestionCountProvider>
      <Footer/>
    </div>
  )
}
