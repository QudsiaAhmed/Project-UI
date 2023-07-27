import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
