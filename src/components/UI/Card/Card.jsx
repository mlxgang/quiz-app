import cl from './Card.module.css'

export const Card = ({children}) => {
  
  return (
    <main className={cl.card}>
      {children}
    </main>
  )
}