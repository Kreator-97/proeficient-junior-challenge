import { FC } from 'react'
import { updateItems } from '../app/slices/summarySlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { ProductNames } from '../interfaces'

interface Props {
  title: ProductNames;
}

export const Selector: FC<Props> = ({title}) => {
  const dispatch = useAppDispatch()
  const items = useAppSelector(state => state.summary.items)

  const item = items.find( item => item.id === title )

  return (
    <div className='flex rounded-md border border-gray-200'>
      <button
        data-testid='decrement-btn'
        className='bg-gray-200 px-4 py-1 text-lg rounded-l-md'
        onClick={ () => dispatch( updateItems({ id: title, type: 'decrement' })) }
      > -
      </button>
      <div className='w-full bg-white flex items-center'>
        <p className='text-center w-full'>
          { item?.amount }
        </p>
      </div>
      <button
        data-testid='increment-btn'
        className='bg-gray-200 px-4 py-1 text-lg  rounded-r-md'
        onClick={ () => dispatch( updateItems({ id: title, type: 'increment' })) }
      > + </button>
    </div>
  )
}
