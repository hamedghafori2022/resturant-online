import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
  )
}

export default App