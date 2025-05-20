import cl from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.dot}></div>
      <div className={cl.dot}></div>
      <div className={cl.dot}></div>
    </div>
  );
};