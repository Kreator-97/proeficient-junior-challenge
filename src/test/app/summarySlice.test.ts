import { it, expect, describe } from 'vitest'
import { initialState, itemToTest } from '../fixtures/summarySlice'

import { summarySlice, updateItems } from '../../app/slices/summarySlice'
import { PRICE_M2 } from '../fixtures/globals'


describe('tests on summarySlice', () => {

  it('should to return the initial state', () => {
    expect(summarySlice.name).toBe('summary')
    const state = summarySlice.reducer( initialState, { type: '' } )

    expect(state).toBe(initialState)
  })

  it('updateItems action should to increment the item amount correctly', () => {
    const state = summarySlice.reducer(
      initialState,
      updateItems({ type: 'increment', id: itemToTest.id })
    )

    const item = state.items.find((item) => item.id === itemToTest.id )

    if( !item ) {
      throw new Error('Item with this id should to exist')
    }

    expect( item.amount ).toBe(1)
    expect( state.info.totalItems ).toBe(1)

    const expectedTotal = (item.amount * item.volume * PRICE_M2) * 1.16
    expect( state.info.total ).toBe(expectedTotal)
  })

  it('updateItems action should to decrement the item amount correctly', () => {
    // first increment the amount by a item
    const state = summarySlice.reducer(
      initialState,
      updateItems({ type: 'increment', id: itemToTest.id })
    )
    
    // then decrement the same item
    const newState = summarySlice.reducer(
      state,
      updateItems({ type: 'decrement', id: itemToTest.id })
    )

    const item = newState.items.find((item) => item.id === itemToTest.id)

    if( !item ) {
      throw new Error('Item with this id should to exist')
    }

    expect(newState.info.totalItems).toBe(0)
    expect(item?.amount).toBe(0)
    expect(newState.info.total).toBe(0)
  })

})

