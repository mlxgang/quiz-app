import './App.module.css';
import { QuizProvider } from '@/contexts/QuizProvider.jsx';
import { useCurrentPage } from '@/contexts/CurrentPageProvider.jsx';
import { PAGES } from '@/constants/index.js';
import { Footer, Header } from '@/components';
import { Quiz, Result, Welcome } from '@/pages';
import { Card } from '@UI';
import cl from './App.module.css';


const pages = {
  [PAGES.welcome]: <Welcome/>,
  [PAGES.quiz]: <Quiz/>,
  [PAGES.result]: <Result/>
};

export const App = () => {
  const {page} = useCurrentPage();

  return (
    <div className={cl.container}>
      <Header/>
      <QuizProvider>
        <Card>
          {pages[page]}
        </Card>
      </QuizProvider>
      <Footer/>
    </div>
  );
};
