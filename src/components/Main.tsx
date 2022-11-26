import { ButtonsControl, GridProducts, Summary } from './'
import { products } from '../data/products'

export const Main = () => {
  return (
    <div className='max-w-5xl mx-auto '>
      <section className="text-center my-20">
        <h1 className="text-5xl text-dark py-8">What items to store?</h1>
        <p>Select which items you wish to store before moving to your new home. We&apos;ll keep &apos;em safe</p>

      </section>

      <GridProducts products={products} />
      <ButtonsControl />
      <Summary />
    </div>
  )
}
