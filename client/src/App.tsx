import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [getData, setGetData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/agaps')
      setGetData(response.data)
      console.log(response.data)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>My AGAPS</h1>
      <h2>OVERVIEW</h2>
      {
        getData.map((data: any) => {
          return (
            <div key={data.id}>
              <h3>Hole: {data.hole}</h3>
              <p>Par: {data.par}</p>
              <p>Score: {data.score}</p>
              <p>Fairway: {data.fairway}</p>
              <p>GIR: {data.green}</p>
              <p>Approach Shot: {data.approach}</p>
              <p>Penalty Strokes: {data.penalty}</p>
              <p>Putts: {data.putts}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
