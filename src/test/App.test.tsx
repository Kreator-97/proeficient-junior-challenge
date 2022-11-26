import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { describe, expect, it } from 'vitest'
import App from '../App'
import { store } from '../app/store'

describe('tests on app component', () => {

  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  it('should to match with snapshot', () => {
    expect( container ).toMatchSnapshot()
  })
})
