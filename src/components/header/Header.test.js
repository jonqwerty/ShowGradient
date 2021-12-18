import React from 'react'
import { render, screen} from '@testing-library/react'

import { Provider } from 'react-redux'
import store from '../../redux/redux-store'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'



export function testRender(jsx, { store, ...otherOpts }) {
    return render(<BrowserRouter><Provider store={store}>{jsx}</Provider></BrowserRouter>, otherOpts)
  }

describe("The Header component", () => {
    test("after loading have name  in the screen", () => {
        testRender(<Header />, { store })
        expect(screen.getByText(/show gradient/i)).toBeInTheDocument()
    }),
    test("after loading have Home Page in the screen", () => {
        testRender(<Header />, { store })
        expect(screen.getByText(/home page/i)).toBeInTheDocument()
    }),
    test("after loading have New Page in the screen", () => {
        testRender(<Header />, { store })
        expect(screen.getByText(/new gradient/i)).toBeInTheDocument()
    }),
    test("after loading have link home page - /home", () => {
        testRender(<Header />, { store })
        //screen.debug()
        expect(screen.getByText(/home page/i).closest('a')).toHaveAttribute('href', '/home')
    }),
    
    test("after loading have link new gradient - /new", () => {
        testRender(<Header />, { store })
        expect(screen.getByText(/new gradient/i).closest('a')).toHaveAttribute('href', '/new')
    })
    
    })