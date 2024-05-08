import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './HoleDetail.css'

const HoleDetail = () => {
    // here you fetch the hole detail overview
    // by the courseId matching the roundId (courseInfo server)
    const { id } = useParams()
    const [getDetails, setGetDetails] = useState([])
    console.log(id);

    // fetch data by id
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3000/agaps/${id}`)
            // const response = await axios.get(`https://agaps-a-golf-analyze-web-app.onrender.com/agaps/${id}`)
            setGetDetails(response.data)
            console.log(response.data);
        }
        fetchData()
    }, [])

    return (
        <>
            <h2>Overview - Hole Details</h2>
            {
                getDetails.map((data: any, index: number) => {
                    return (
                        <div key={index} className="detailCard">
                            <h4 >Hole: {data.hole} (Par: {data.par})</h4>
                            <p>Score: <span>{data.score}</span></p>
                            <p>Fairway: {data.fairway}</p>
                            <p>GIR: {data.green}</p>
                            <p>Approach Shot:{data.approach}</p>
                            <p>Penalty Stroke:{data.penalty}</p>
                            <p>Putts: {data.putts}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
export default HoleDetail