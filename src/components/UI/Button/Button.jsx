import { Tooltip } from '@components';
import { useKeyboardClick } from '@hooks';
import cl from './Button.module.css';
import { KEYBOARD_BUTTONS } from '@constants/index.js';

export const Button = ({onClick, keyboardKey = KEYBOARD_BUTTONS.Enter, children, ...props}) => {
  useKeyboardClick(() => {
    !props.disabled && onClick();
  }, keyboardKey);

  return (
    <div className={cl.container}>
      <button className={cl.button} onClick={onClick} {...props}>
        {children}
      </button>
      <Tooltip buttonText={keyboardKey} {...props}/>
    </div>
  );
};