import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import EditPage from './pages/edit/EditPage'
import HomePage from './pages/home/HomePage'
import NewGradientPage from './pages/new/NewGradientPage'



const App = () => {
  return (
    <div className="App">
     <Header />
      <div>
        <Routes >
          <Route exact path='/'             element={<HomePage /> }  />
          <Route path='/home'               element={<HomePage /> } />
          <Route path='/new'                element={<NewGradientPage /> } />
          <Route path='/edit/:id'           element={ <EditPage /> } /> 
          <Route path='*'                   element={<div>404 NOT FOUND</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App