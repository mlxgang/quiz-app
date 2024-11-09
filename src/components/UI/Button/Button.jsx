import cl from './Button.module.css'
import { cls } from '@utils/classJoin.js';

export const Button = ({variant, text, children, ...props}) => {
    return (
        <>
            <div className={cl.container}>
                <button className={cls(cl.button, cl[variant])} {...props}>
                    {text || children}
                </button>
                {variant === 'primary' &&
                    <div className={cl['tooltip-container']}>
                        <span className={cl.tooltip}>или нажми </span>
                        <span className={cl['tooltip-enter']}>Enter&crarr;</span>
                    </div>
                }
            </div>
        </>

    )
}