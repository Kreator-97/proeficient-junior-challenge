import { Product } from '../interfaces'

import beds         from '../assets/beds.svg'
import refrigerator from '../assets/refrigerator.svg'
import forniture    from '../assets/forniture.svg'
import oven         from '../assets/oven.svg'
import sofa         from '../assets/sofa.svg'
import tv           from '../assets/tv.svg'
import washer       from '../assets/washer-dryer.svg'
import dining       from '../assets/dining.svg'
import desk         from '../assets/desk.svg'
import wardrobe     from '../assets/wardrobe.svg'

export const products: Product[] = [
  {
    imgURL: beds,
    volume: 1.2,
    title: 'beds'
  },
  {
    imgURL: refrigerator,
    volume: 1,
    title: 'refrigerator'
  },
  {
    imgURL: forniture,
    volume: .5,
    title: 'forniture'
  },
  {
    imgURL: oven,
    volume: 0.6 ,
    title: 'oven'
  },
  {
    imgURL: sofa,
    volume: 1.5,
    title: 'sofa'
  },
  {
    imgURL: tv,
    volume: .25,
    title: 'tv'
  },
  {
    imgURL: washer,
    volume: .5,
    title: 'washer-dryer'
  },
  {
    imgURL: dining,
    volume: 2,
    title: 'dining'
  },
  {
    imgURL: desk,
    volume: .75,
    title: 'desk'
  },
  {
    imgURL: wardrobe,
    volume: 3.2,
    title: 'wardrobe'
  },
  
]
