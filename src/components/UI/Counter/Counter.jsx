import cl from './Counter.module.css'
import { useState } from 'react';
import minusIcon from '@assets/icons/60/minus.svg'
import plusIcon from '@assets/icons/60/plus.svg'
import { Button } from '@components/UI/Button/Button.jsx';

export const Counter = ({title}) => {

    const [count, setCount] = useState(18)

    const decrement = () => {
        if (count !== 1) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const inputHandler = (e) => {
        const {value} = e.target

        if (value <= 0) {
            setCount(1)
        } else {
            setCount(value)
        }
    }

    return (
        <div className={cl.container}>
            {title && <h2 className={cl.title}>{title}</h2>}
            <div className={cl.counter}>
                <Button className={cl.button} onClick={decrement}>
                    <img src={minusIcon} alt="Plus button"/>

                </Button>
                <input className={cl.input} type="number" value={count} onChange={(e) => inputHandler(e)}/>
                <button className={cl.button} onClick={increment}>
                    <img src={plusIcon} alt="Plus button"/>
                </button>
            </div>
        </div>

    )
}