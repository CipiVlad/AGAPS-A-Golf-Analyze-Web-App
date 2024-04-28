import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [getData, setGetData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/test')
      const data = await response.json()
      setGetData(data)
      console.log(data[0].name)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      {
        getData.map((data: any) => {
          return <h1>{data.name}</h1>
        })
      }
    </div>
  )
}

export default App
