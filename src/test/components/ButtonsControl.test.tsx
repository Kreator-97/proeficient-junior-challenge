import { screen, render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Provider } from 'react-redux'

import { ButtonsControl } from '../../components/ButtonsControl'
import { store } from '../../app/store'

const dispatch = vi.fn()

vi.mock('../../app/hooks', () => {
  return {
    useAppDispatch: () => dispatch
  }
})

describe('test on ButtonControl component', () => {
  it('should to match with snapshot', () => {

    const { container  } = render(
      <Provider store={store}>
        <ButtonsControl />
      </Provider>
    )

    expect( container ).toMatchSnapshot()
  })

  it('dispatch should to dispatch the reset action', () => {
    
    const resetAction = { payload: undefined, type: 'summary/reset' }
    
    render(
      <Provider store={store}>
        <ButtonsControl />
      </Provider>
    )

    screen.getByRole('button').click()

    expect( dispatch ).toHaveBeenCalledWith(resetAction)
  })
})
