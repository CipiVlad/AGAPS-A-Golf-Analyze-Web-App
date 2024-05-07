import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './HoleDetail.css'

interface HoleDetails {
    hole: number,
    par: number,
    score: number,
    fairway: string,
    green: string,
    approach: string,
    penalty: number,
    putts: number
}

const HoleDetail = () => {
    // here you fetch the hole detail overview
    // by the courseId matching the roundId (courseInfo server)
    const { id } = useParams()
    const [getDetails, setGetDetails] = useState([])
    console.log(id);


    // fetch data by roundId

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3000/agaps/${id}`)
            // const response = await axios.get(`https://agaps-a-golf-analyze-web-app.onrender.com/agaps/${courseId}`)
            setGetDetails(response.data)
            console.log(response.data);
        }
        fetchData()
    }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axios.get(`http://localhost:3000/agaps/${roundId}`)
    //         // const response = await axios.get(`https://agaps-a-golf-analyze-web-app.onrender.com/agaps/${courseId}`)
    //         setGetDetails(response.data)
    //         console.log(response.data);
    //     }
    //     fetchData()
    // }, [])

    // console.log(getDetails);


    return (
        <>
            <h2>Overview - Hole Details</h2>

            {/* render the hole details here */}
            {/* <div className="detailCard">
                <h4>Hole: {getDetails.hole} (Par: {getDetails.par})</h4>
                <p>Score: <span>{getDetails.score}</span></p>
                <p>Fairway: {getDetails.fairway}</p>
                <p>GIR: {getDetails.green}</p>
                <p>Approach Shot:{getDetails.approach}</p>
                <p>Penalty Stroke:{getDetails.penalty}</p>
                <p>Putts: {getDetails.putts}</p>
            </div> */}

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