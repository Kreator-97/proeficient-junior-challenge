import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { describe, expect, it, vi } from 'vitest'

import { store } from '../../app/store'
import { Selector } from '../../components'

const dispatch = vi.fn()

vi.mock('../../app/hooks', async () => {
  const rest = await vi.importActual('../../app/hooks') as Record<string, unknown>[]

  return {
    ...rest,
    useAppDispatch: () => dispatch,
  }
})

describe('tests on selector component', () => {
  const title = 'beds'

  it('should match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Selector title={ title } />
      </Provider>
    )

    expect( container ).toMatchSnapshot()
  })

  it('should to dispatch updateItems action with decrement type', () => {
    render(
      <Provider store={store}>
        <Selector title={ title } />
      </Provider>
    )
    const decrementBtn = screen.getByTestId('decrement-btn')

    fireEvent.click(decrementBtn)

    expect( dispatch ).toHaveBeenCalledWith({
      payload: { id: title, type: 'decrement' },
      type: 'summary/updateItems'
    })
  })
  it('should to dispatch updateItems action with increment type', () => {
    render(
      <Provider store={store}>
        <Selector title={ title } />
      </Provider>
    )
    const decrementBtn = screen.getByTestId('increment-btn')

    fireEvent.click(decrementBtn)

    expect( dispatch ).toHaveBeenCalledWith({
      payload: { id: title, type: 'increment' },
      type: 'summary/updateItems'
    })
  })
})


