import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Overview } from './pages/app/Overview'
import HoleDetail from './pages/app/InGame/HoleDetail'
import Navbar from './components/Navbar'
import AddRound from './pages/app/AddRound'

function App() {


  return (
    <div className="App">
      <Link to="/overview">Overview</Link>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/add-round" element={<AddRound />} />
        <Route path="/details/:id" element={<HoleDetail />} />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
