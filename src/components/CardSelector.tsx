import { FC } from 'react'

import { Product } from '../interfaces'
import { toCapitalize } from '../utils'
import { CardImage, Selector } from './'

interface Props {
  product: Product;
}

export const CardSelector: FC<Props> = ({ product }) => {

  return (
    <div>
      <div className="flex flex-col gap-4 justify-center p-4 items-center mb-4 shadow-md border border-gray-100">
        <CardImage
          imgURL={ product.imgURL }
          title={ product.title }
        />
        <div>
          <p className='block w-full font-light text-dark'>{toCapitalize( product.title )}</p>
        </div>
      </div>
      <Selector title={ product.title } />
    </div>
  )
}
