import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleBlog from './pages/SingleBlog'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:id' element={<SingleBlog/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
