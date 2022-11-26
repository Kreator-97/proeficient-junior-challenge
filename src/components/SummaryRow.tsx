import { FC } from 'react'

interface Props {
  title     : string;
  value     : string | number;
  className?: string;
}

export const SummaryRow: FC<Props> = ({title, value, className = '' }) => {
  return (
    <div
      className={ 'grid py-4 ' + className }
      style={{ gridTemplateColumns: '1fr 80px' }}
    >
      <p>{ title }</p>
      <p>{ value }</p>
    </div>
  )
}
