import { useAppDispatch } from '../app/hooks'
import { reset } from '../app/slices/summarySlice'

export const ButtonsControl = () => {

  const dispatch = useAppDispatch()

  return (
    <div className="flex justify-between mb-12 px-4">
      <button
        onClick={ () => dispatch( reset() ) }
        className="btn bg-white rounded-sm border-2 border-primary hover:bg-primary"
      >
        Clear
      </button>
    </div>
  )
}
