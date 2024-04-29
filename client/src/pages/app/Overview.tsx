import { useState, useEffect } from 'react'
import axios from 'axios'

export const Overview = () => {
    const [getData, setGetData] = useState([])
    const [showData, setShowData] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3000')
            setGetData(response.data)
            // console.log(response.data)
        }
        fetchData()
    }, [])

    //get by id

    return (
        <div>
            <h2>Overview</h2>
            <p>last rounds</p>
            <button onClick={() => setShowData(!showData)}>{showData ? 'Hide' : 'Show'}</button>
            {
                showData && getData.map((data: any) => {
                    return (
                        <div key={data.id}>
                            <h3>Hole: {data.hole}</h3>
                            <div>
                                <p>Par: {data.par}</p>
                                <p>Score: {data.score}</p>
                                <p>Fairway: {data.fairway}</p>
                                <p>Green: {data.green}</p>
                                <p>Approach: {data.approach}</p>
                                <p>Penalty: {data.penalty}</p>
                                <p>Putts: {data.putts}</p>
                            </div>


                        </div>
                    )
                })
            }
        </div>
    )
}