import { createContext, useContext, useState } from 'react';

const CurrentPageContext = createContext({})

export const useCurrentPage = () => {
  return useContext(CurrentPageContext)
}

export const CurrentPageProvider = ({ children }) => {
  const [page, setPage] = useState('welcome')
  
  return (
    <CurrentPageContext.Provider value={{ page, setPage }}>
      {children}
    </CurrentPageContext.Provider>
  )
}