import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const Overview = () => {
    const [getData, setGetData] = useState([])
    const [getDataById, setGetDataById] = useState([])
    const [showData, setShowData] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            // const response = await axios.get('http://localhost:3000/concat-tables')
            const response = await axios.get('http://localhost:3000/course-info')
            setGetData(response.data)
            console.log(response.data);
        }
        fetchData()
    }, [])


    return (
        <div>
            <h2>Overview</h2>
            {/* show the data of the table concat-tables  */}
            <h3>last rounds</h3>

            <button onClick={() => setShowData(!showData)}>{showData ? 'Hide' : 'Show'}</button>
            {
                showData && getData.map((data: any, index: number) => {
                    return (
                        <div key={index}>
                            <Link to={`/details/${data.id}`}>Course:{data.course}</Link>
                            <p>Round: {data.round}</p>
                            <p>Date: {data.formattedTimestamp}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}