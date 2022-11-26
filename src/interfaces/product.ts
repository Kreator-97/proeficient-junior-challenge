export type ProductNames = 'desk' | 'beds' | 'dining' | 'forniture' | 'oven' | 'refrigerator' | 'sofa' | 'tv' | 'wardrobe' | 'washer-dryer'

export interface Product {
  title : ProductNames;
  imgURL: string;
  volume: number;
}

