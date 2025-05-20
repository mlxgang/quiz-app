import { useContext } from 'react';
import { CurrentPageContext } from '@contexts/CurrentPageProvider.jsx';

export const useCurrentPage = () => {
  return useContext(CurrentPageContext);
};