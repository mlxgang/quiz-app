import { useCallback, useEffect } from 'react';

export const useKeyboardClick = (callback, ...keys) => {
  const clickHandler = useCallback(e => {
    if ([...keys].includes(e.key)) {
      callback();
    }
  }, [callback, keys]);

  useEffect(() => {
    document.addEventListener('keydown', clickHandler);

    return () => {
      document.removeEventListener('keydown', clickHandler);
    };
  }, [clickHandler]);
};