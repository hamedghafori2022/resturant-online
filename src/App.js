import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Home/>
    </BrowserRouter>
  )
}

export default App