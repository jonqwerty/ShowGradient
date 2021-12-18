import React from 'react'
import { render, screen} from '@testing-library/react'

import { Provider } from 'react-redux'
import store from '../../redux/redux-store'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'



export function testRender(jsx, { store, ...otherOpts }) {
    return render(<BrowserRouter><Provider store={store}>{jsx}</Provider></BrowserRouter>, otherOpts)
  }

describe("The HomePage component", () => {
    test("after loading data is in the screen", async() => {
        testRender(<HomePage />, { store })
        expect(screen.queryByTestId('list')).toBeNull()
        expect(await screen.findByTestId('list')).toBeInTheDocument() 
    })
    
    })