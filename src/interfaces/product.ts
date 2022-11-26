export type ProductNames = 'desk' | 'bed' | 'dining' | 'forniture' | 'oven' | 'refrigerator' | 'sofa' | 'tv' | 'wardrobe' | 'washer-dryer'

export interface Product {
  title : ProductNames;
  imgURL: string;
  volume: number;
}

