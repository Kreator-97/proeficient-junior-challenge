import { useState } from 'react'

export const Selector = () => {
  const [ counter, setCounter] = useState(0)

  return (
    <div className='flex shadow-md rounded-md'>
      <button className='bg-gray-200 px-2 py-1 text-lg font-bold rounded-l-md'>-</button>
      <div className='w-full bg-white flex items-center'>
        <p className='text-center w-full'>
          { counter }
        </p>
      </div>
      <button className='bg-gray-200 px-2 py-1 text-lg font-bold rounded-r-md'>+</button>
    </div>
  )
}
