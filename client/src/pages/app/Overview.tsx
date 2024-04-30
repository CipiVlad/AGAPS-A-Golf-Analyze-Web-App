import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const Overview = () => {
    const [getData, setGetData] = useState([])
    const [getDataById, setGetDataById] = useState([])
    const [showData, setShowData] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3000/agaps')
            setGetData(response.data)
        }
        fetchData()
    }, [])


    return (
        <div>
            <h2>Overview</h2>

            <button onClick={() => setShowData(!showData)}>{showData ? 'Hide' : 'Show'}</button>
            {
                showData && getData.map((data: any) => {
                    return (
                        <div key={data.id}>
                            <Link to={`/details/${data.id}`}>Hole {data.hole}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}