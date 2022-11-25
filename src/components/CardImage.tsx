import { FC } from 'react'

interface Props {
  imgURL  : string;
  title   : string;
}

export const CardImage: FC<Props> = ({imgURL, title}) => {
  return (
    <div className='h-16 flex items-center'>
      <img
        className='max-h-[48px]'
        src={imgURL}
        alt={title}
        width={48}
      />
    </div>
  )
}
