import { FC } from 'react'
import { Product } from '../interfaces'
import { CardImage, Selector } from './'

interface Props {
  product: Product;
}

export const CardSelector: FC<Props> = ({ product }) => {

  return (
    <div>
      <div className="flex flex-col gap-4 justify-center p-4 items-center mb-4 shadow-lg border border-gray-100">
        <CardImage
          imgURL={ product.imgURL }
          title={ product.title }
        />
        <div>
          <p className='block w-full'>{product.title}</p>

        </div>
      </div>
      <Selector />
    </div>
  )
}
