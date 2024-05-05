import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Overview } from './pages/app/Overview'
import HoleDetail from './pages/app/HoleDetail'
import Navbar from './components/Navbar'
import AddCourseInfo from './pages/app/AddCourseInfo'
import HoleCard from './components/HoleCardStart'
import Home from './pages/app/Home'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/details/:id" element={<HoleDetail />} />
        <Route path="/add-round" element={<AddCourseInfo />} />
        <Route path="/hole-card/:id" element={<HoleCard />} />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
