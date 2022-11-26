import { it, describe, expect } from 'vitest'

import { calcSummary } from '../../utils'
import { initialState } from '../fixtures/summarySlice'
import { Item } from '../../app/slices/summarySlice'

describe('test on calcSummary function', () => {
  it('should to return a SummaryInfo object type', () => {
    const summary = calcSummary(initialState.items)

    expect( summary ).toMatchObject({
      totalItems  : expect.any(Number),
      totalVolume : expect.any(Number),
      subtotal    : expect.any(Number),
      tax         : expect.any(Number),
      total       : expect.any(Number),
    })
  })

  it('should to calc the summary correctly', () => {
    // in the figma prototype we have the following data based in real info:
    const realInfoFromPrototype: Item[] = [
      ...initialState.items,
      {
        amount: 3,
        id: 'beds',
        volume: 1.2
      },
      {
        amount: 1,
        id: 'refrigerator',
        volume: 1,
      },
      {
        amount: 2,
        id: 'oven',
        volume: .6,
      },
      {
        amount: 3,
        id: 'tv',
        volume: .25,
      },
      {
        amount: 1,
        id: 'washer-dryer',
        volume: .5,
      },
      {
        amount: 2,
        id: 'desk',
        volume: .75,
      },
    ]

    const summary = calcSummary(realInfoFromPrototype)
    expect( summary ).toEqual({
      totalItems: 12,
      totalVolume: 8.55,
      subtotal: 1710,
      tax: 273.6,
      total: 1983.6,
    })
  })
})

