import React from 'react'
import { fireEvent, render, screen} from '@testing-library/react'
import Gradient from './Gradient'
import { Provider } from 'react-redux'
import store from '../redux/redux-store'
import { BrowserRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const data = {
    hexOne: 'aaa',
    hexTwo: 'bbb',
    id: 'a'
}

const asas = jest.fn()

export function testRender(jsx, { store, ...otherOpts }) {
    return render(<BrowserRouter><Provider store={store}>{jsx}</Provider></BrowserRouter>, otherOpts)
  }

describe("The Gradient component", () => {
    test("after loading delete button is in the screen", () => {
        testRender(<Gradient gradient={data} />, { store })
        screen.debug()
        expect(screen.getByTestId('del-btn')).toBeInTheDocument()
    }),

    test("after loading edit button is in the screen", () => {
        testRender(<Gradient gradient={data} />, { store })
        expect(screen.getByTestId('edit-btn')).toBeInTheDocument()
    }),

    test("after loading  left color value 'aaa' should be in the screen ", () => {
        testRender(<Gradient gradient={data} />, { store })
        expect(screen.getByText('aaa')).toBeInTheDocument()
    }),

    test("after loading  right color value 'bbb' should be in the screen ", () => {
        testRender(<Gradient gradient={data} />, { store })
        expect(screen.getByText('bbb')).toBeInTheDocument()
    }),

    test("onClick works ", () => {
        testRender(<Gradient gradient={data} />, { store })
        userEvent.click(screen.queryByTestId('del-btn'))

        expect(asas).toHaveBeenCalledTimes(1)
    })
    
    

    
    })