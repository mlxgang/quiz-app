import { createContext, useContext, useState } from 'react';
import { PAGES } from '@/constants/index.js';

const CurrentPageContext = createContext({});

export const useCurrentPage = () => {
  return useContext(CurrentPageContext);
};

export const CurrentPageProvider = ({children}) => {
  const [page, setPage] = useState(PAGES.welcome);

  return (
    <CurrentPageContext.Provider value={{page, setPage}}>
      {children}
    </CurrentPageContext.Provider>
  );
};