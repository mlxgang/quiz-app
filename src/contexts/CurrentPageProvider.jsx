import { createContext, useState } from 'react';
import { PAGES } from '@constants';

export const CurrentPageContext = createContext({});

export const CurrentPageProvider = ({children}) => {
  const [page, setPage] = useState(PAGES.welcome);

  return (
    <CurrentPageContext.Provider value={{page, setPage}}>
      {children}
    </CurrentPageContext.Provider>
  );
};