import './App.css'
import { Logo } from '@components/UI/Logo/Logo.jsx';
import { Welcome } from '@components/Welcome/Welcome.jsx';
import { useState } from 'react';
import { StartQuiz } from '@components/StartQuiz/StartQuiz.jsx';
import { Result } from '@components/Result/Result.jsx';

export const App = () => {

    const [screen, setScreen] = useState('result')

    return (
        <>
            <div className="container">
                <Logo/>
                {screen === 'welcome' && <Welcome/>}
                {screen === 'startQuiz' && <StartQuiz/>}
                {screen === 'result' && <Result/>}
                <footer className="footer">
                    <span>Проект выполнен в рамках стажировки </span>
                    <a href="https://preax.ru" target="_blank" className="link">PREAX</a>
                </footer>
            </div>

        </>
    )
}
