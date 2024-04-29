import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Overview } from './pages/app/Overview'


function App() {


  return (
    <div className="App">
      <Link to="/overview">Overview</Link>
      <Routes>
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </div>
  )
}

export default App
