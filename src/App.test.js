import {render, screen} from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './redux/redux-store'


export function testRender(jsx, { store, ...otherOpts }) {
    return render(<BrowserRouter><Provider store={store}>{jsx}</Provider></BrowserRouter>, otherOpts)
  }

test('Render App component', () => {
    testRender(<App  />, { store })
    const name = screen.getByText(/show gradient/i)
    expect(name).toBeInTheDocument()
})