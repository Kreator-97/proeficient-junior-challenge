import { Item, SummaryState } from '../../app/slices/summarySlice'

export const initialState: SummaryState = {
  items: [
    { amount: 0, id: 'beds', volume: 1.2 },
    { amount: 0, id: 'refrigerator', volume: 1 },
    { amount: 0, id: 'forniture', volume: 0.5 },
    { amount: 0, id: 'oven', volume: 0.6 },
    { amount: 0, id: 'sofa', volume: 1.5 },
    { amount: 0, id: 'tv', volume: 0.25 },
    { amount: 0, id: 'washer-dryer', volume: 0.5 },
    { amount: 0, id: 'dining', volume: 2 },
    { amount: 0, id: 'desk', volume: 0.75 },
    { amount: 0, id: 'wardrobe', volume: 3.2 }
  ],
  info: { subtotal: 0, tax: 0, total: 0, totalItems: 0, totalVolume: 0 }
}

export const itemToTest: Item = { amount: 0, id: 'beds', volume: 1.2 }
