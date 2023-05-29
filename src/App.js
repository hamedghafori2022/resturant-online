import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App