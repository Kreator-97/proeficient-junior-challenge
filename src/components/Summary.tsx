import { SummaryRow } from '.'

export const Summary = () => {
  return (
    <div className="max-w-md mx-auto mb-8">
      <h2 className="text-center text-2xl text-dark mb-12">Summary</h2>

      <div
        className="px-8 py-4 bg-gray-100 rounded-sm"
      >
        <SummaryRow
          title='Total Items'
          value={ 12 }
        />

        <SummaryRow
          title='Total M²'
          value={ 12 }
        />

        <SummaryRow
          title='Subtotal'
          value={ 12 }
        />

        <SummaryRow
          title='Tax'
          value={ 12 }
        />

        <SummaryRow
          title='Total'
          value={ 12 }
          className='font-bold text-black'
        />

        <SummaryRow
          title='Due Today 50%'
          value={ 12 }
          className='font-bold text-black'
        />
      </div>
    </div>
  )
}
