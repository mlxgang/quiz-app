import icons from '@/assets/icons/sprite.svg';

export const Icon = ({ className, name }) => {
  return (
    <svg className={className}>
      <use href={`${icons}#${name}`}/>
    </svg>
  )
}