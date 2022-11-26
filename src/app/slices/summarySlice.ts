import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { products } from '../../data/products'
import { calcSummary } from '../../utils'
import { ProductNames } from '../../interfaces'

export interface SummaryState {
  items : Item[];
  info  : SummaryInfo;
}

export interface SummaryInfo {
  totalItems  : number;
  totalVolume : number;
  subtotal    : number;
  tax         : number;
  total       : number;
}

export interface Item {
  amount: number;
  volume: number;
  id    : ProductNames;
}

// maps the products props to item interface
const items: Item[] = products.map(product => ({
  amount: 0,
  id    : product.title,
  volume: product.volume
}))


const initialState: SummaryState = {
  items : items,
  info: {
    subtotal      : 0,
    tax           : 0,
    total         : 0,
    totalItems    : 0,
    totalVolume   : 0,
  }
}


interface UpdateItemsProps { 
  id  : string,
  type: 'decrement' | 'increment'
}

export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    updateItems(state, action: PayloadAction<UpdateItemsProps> ) {
      const index = state.items.findIndex((item) => item.id === action.payload.id )

      // item is found when index !== 1
      if( index >= 0 ) {
        // create new array from state
        const items = Array.from( state.items )
        const item = items[index]

        if( action.payload.type === 'decrement' ) {
          items[index] = { ...item, amount: Math.max(item.amount-1, 0) }
        }
        
        if( action.payload.type === 'increment' ) {
          items[index] = { ...item, amount: item.amount+1 }
        }

        return { items, info: calcSummary(items) }
      }
      
      return { ...state }
    },
    reset() {
      return { ...initialState }
    }
  },
})

export const { updateItems, reset } = summarySlice.actions

export default summarySlice.reducer
