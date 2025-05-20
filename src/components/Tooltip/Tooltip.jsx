import { Icon } from '@UI';
import { cls } from '@utils';
import cl from './Tooltip.module.css';

export const Tooltip = ({disabled, buttonText}) => {
  return (
    <div className={cls(cl.container, disabled && cl.disabled)}>
      <span className={cl.text}>или нажми </span>
      <span className={cl.strong}>{buttonText}</span>
      <Icon className={cl.icon} name="enter"/>
    </div>
  );
};