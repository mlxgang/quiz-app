import { Tooltip } from '@/components';
import { useKeyboardClick } from '@/hooks';
import cl from './Button.module.css';
import { KEYBOARD_BUTTONS } from '@/constants/index.js';

export const Button = ({onClick, text, keyboardKey = KEYBOARD_BUTTONS.Enter, ...props}) => {
  useKeyboardClick(() => {
    !props.disabled && onClick();
  }, keyboardKey);

  return (
    <div className={cl.container}>
      <button className={cl.button} onClick={onClick} {...props}>
        {text}
      </button>
      <Tooltip buttonText={keyboardKey} {...props}/>
    </div>
  );
};