import { ButtonsControl, GridProducts } from './'
import { products } from '../data/products'

export const Main = () => {
  return (
    <div className='max-w-5xl mx-auto '>
      <section className="text-center my-20">
        <h1 className="text-5xl text-dark py-8">What items to store?</h1>
        <p>Select which items you wisj to store before moving to your new home. W&apos;ll keep &apos;em safe</p>

      </section>

      <GridProducts products={products} />
      <ButtonsControl />
    </div>
  )
}
