import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import NewGradientPage from './NewGradientPage'
import { Provider } from "react-redux"
import store from '../../redux/redux-store'
import { BrowserRouter } from 'react-router-dom'



export function testRender(jsx, { store, ...otherOpts }) {
    return render(<BrowserRouter><Provider store={store}>{jsx}</Provider></BrowserRouter>, otherOpts)
  }



describe("The NewGradientPage component", () => {
    test("after loading 'Add Gradient' button is disabled", () => {
     
      const { queryByTestId } = testRender(<NewGradientPage />, { store })
      expect(queryByTestId('b')).toBeTruthy()
    })

    test(" the 'Add Gradient' button should be abled  with valid values", () => {

        const { queryByTestId, queryByTitle } = testRender(<NewGradientPage />, { store })

        const inputOne = queryByTitle('hexOne')
        fireEvent.change(inputOne, { target: { value: '#111' } })

        const inputTwo = queryByTitle('hexTwo')
        fireEvent.change(inputTwo, { target: { value: '#222' } })

        const button = queryByTestId('b')
        expect(button.disabled).toBe(false)
        
      })

    test(" the 'Add Gradient' button should be disabled  with invalid values", () => {

        const { queryByTestId, queryByTitle } = testRender(<NewGradientPage />, { store })

        const inputOne = queryByTitle('hexOne')
        fireEvent.change(inputOne, { target: { value: '111' } })

        const inputTwo = queryByTitle('hexTwo')
        fireEvent.change(inputTwo, { target: { value: '222' } })

        const button = queryByTestId('b')
        expect(button.disabled).toBe(true)
        
      })
    })