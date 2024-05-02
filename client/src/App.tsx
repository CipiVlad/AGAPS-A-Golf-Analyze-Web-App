import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Overview } from './pages/app/Overview'
import HoleDetail from './pages/app/InGame/HoleDetail'
import Navbar from './components/Navbar'
import AddCourseInfo from './pages/app/AddCourseInfo'

function App() {


  return (
    <div className="App">
      <Link to="/overview">Overview</Link>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/add-round" element={<AddCourseInfo />} />
        <Route path="/details/:id" element={<HoleDetail />} />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
