import logoImg from '@/assets/logo.svg';
import { useCurrentPage } from '@/contexts/CurrentPageProvider.jsx';
import { PAGES } from '@/constants';
import cl from './Logo.module.css';

export const Logo = () => {
  const {setPage} = useCurrentPage();

  return (
    <button className={cl.logo} onClick={() => {
      setPage(PAGES.welcome);
    }}>
      <img src={logoImg} alt="Logo image"/>
    </button>
  );
};