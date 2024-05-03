import React, { useEffect } from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import { Home } from './components/Home'


export const Routers = () => {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
}
