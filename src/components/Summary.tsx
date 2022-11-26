import { SummaryRow } from '.'
import { useAppSelector } from '../app/hooks'
import { formatPrice } from '../utils'

export const Summary = () => {

  const summary = useAppSelector((state) => state.summary.info)

  return (
    <div className="max-w-md mx-auto mb-8">
      <h2 className="text-center text-2xl text-dark mb-12">Summary</h2>

      <div
        className="px-8 py-4 bg-gray-100 rounded-sm"
      >
        <SummaryRow
          title='Total Items'
          value={ summary.totalItems }
        />

        <SummaryRow
          title='Total M²'
          value={ summary.totalVolume }
        />

        <SummaryRow
          title='Subtotal'
          value={ formatPrice(summary.subtotal) }
        />

        <SummaryRow
          title='Tax'
          value={ formatPrice(summary.tax) }
        />

        <SummaryRow
          title='Total'
          value={ formatPrice(summary.total) }
          className='font-bold text-black'
        />

        <SummaryRow
          title='Due Today 50%'
          value={ formatPrice(summary.total / 2) }
          className='font-bold text-black'
        />
      </div>
    </div>
  )
}
