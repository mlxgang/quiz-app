import '@/styles/index.css'
import { App } from '@/components/App/App.jsx'
import { CurrentPageProvider } from '@/contexts/CurrentPageProvider.jsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrentPageProvider>
      <App/>
    </CurrentPageProvider>
  </StrictMode>
)
