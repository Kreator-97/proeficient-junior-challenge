import { Item, SummaryInfo } from '../app/slices/summarySlice'

const PRICE_M2 = 200

export const calcSummary = (items: Item[]): SummaryInfo => {
  const totalItems = items.reduce((acc, item) => {
    return acc + item.amount
  }, 0)

  const totalVolume = items.reduce((acc, item) => {
    // item.volume* 100 converts the decimals to integers
    const volume = (item.amount * (item.volume * 100) ) / 100
    return Number( (volume + acc).toFixed(2) )
  }, 0)

  const subtotal = Number( (totalVolume * PRICE_M2).toFixed(2) )
  const tax = Number( (subtotal * .16).toFixed(2) )
  const total = subtotal + tax

  return {
    subtotal,
    tax,
    total,
    totalItems,
    totalVolume
  }
}
