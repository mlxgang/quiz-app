import cl from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={cl.footer}>
      <span>Проект выполнен в рамках стажировки </span>
      <a className={cl.link} href="https://preax.ru" target="_blank" rel="noopener noreferrer">PREAX</a>
    </footer>
  )
}