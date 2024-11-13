import { Icon } from '@/components/UI/Icon/Icon.jsx';
import { cls } from '@/utils/classJoin.js';
import cl from './Tooltip.module.css';

export const Tooltip = ({ disabled }) => {
  return (
    <div className={cls(cl.container, disabled && cl.disabled)}>
      <span className={cl.text}>или нажми </span>
      <span className={cl.strong}>Enter</span>
      <Icon className={cl.icon} name="enter"/>
    </div>
  )
}