import { Logo } from '@/components/UI/Logo/Logo.jsx';
import cl from './Header.module.css'

export const Header = () => {
  return (
    <header className={cl.header}>
      <Logo/>
    </header>
  )
}