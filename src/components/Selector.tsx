import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { updateItems } from '../app/slices/summarySlice'

interface Props {
  title: string;
}

export const Selector: FC<Props> = ({title}) => {
  const dispatch = useAppDispatch()
  const items = useAppSelector(state => state.summary.items)

  const item = items.find( item => item.id === title )

  return (
    <div className='flex shadow-md rounded-md'>
      <button
        className='bg-gray-200 px-2 py-1 text-lg font-bold rounded-l-md'
        onClick={ () => dispatch( updateItems({ id: title, type: 'decrement' })) }
      > -
      </button>
      <div className='w-full bg-white flex items-center'>
        <p className='text-center w-full'>
          { item?.amount }
        </p>
      </div>
      <button
        className='bg-gray-200 px-2 py-1 text-lg font-bold rounded-r-md'
        onClick={ () => dispatch( updateItems({ id: title, type: 'increment' })) }
      > + </button>
    </div>
  )
}
