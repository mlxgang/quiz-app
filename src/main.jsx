import '@/styles/index.css'
import { CurrentPageProvider } from '@/contexts/CurrentPageProvider.jsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrentPageProvider>
      <App/>
    </CurrentPageProvider>
  </StrictMode>
)
