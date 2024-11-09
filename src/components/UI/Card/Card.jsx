import cl from './Card.module.css'

export const Card = ({children}) => {

    return (
        <>
            <div className={cl.card}>
                {children}
            </div>
        </>
    )
}