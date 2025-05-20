import { Logo } from '@UI';
import cl from './Header.module.css';

export const Header = () => {
  return (
    <header className={cl.header}>
      <Logo/>
    </header>
  );
};