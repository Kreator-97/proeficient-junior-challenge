import { FC } from 'react'
import { Product } from '../interfaces'
import { CardSelector } from '.'

interface Props {
  products: Product[]
}

export const GridProducts: FC<Props> = ({products}) => {
  return (
    <div className='grid gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 px-4 mb-8'>
      {
        products.map((product) => {
          console.log(product)
          return (
            <CardSelector key={product.title} product={product} />
          )
        })
      }
    </div>
  )
}
