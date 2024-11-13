import { Tooltip } from '@/components/Tooltip/Tooltip.jsx';
import { useCallback, useEffect } from 'react';
import cl from './Button.module.css'

export const Button = ({ children, onClick, ...props }) => {
  const onClickHandler = useCallback((e) => {
    if (e.key === 'Enter') {
      onClick()
    }
  }, [onClick])
  
  useEffect(() => {
    if (!props.disabled) {
      document.addEventListener('keydown', e => onClickHandler(e))
    }
    
    return () => {
      document.removeEventListener('keydown', e => onClickHandler(e))
    }
  }, [props, onClickHandler]);
  
  return (
    <div className={cl.container}>
      <button className={cl.button} onClick={onClick} {...props}>
        {children}
      </button>
      <Tooltip {...props}/>
    </div>
  )
}