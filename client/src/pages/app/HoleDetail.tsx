import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import './HoleDetail.css'
import { MdEdit } from "react-icons/md";

const HoleDetail = () => {
    // here you fetch the hole detail overview
    // by the courseId matching the roundId (courseInfo server)
    const { id } = useParams()
    const [getDetails, setGetDetails] = useState<any>([])



    // fetch data by id
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3000/agaps/${id}`)
            // const response = await axios.get(`https://agaps-a-golf-analyze-web-app.onrender.com/agaps/${id}`)
            setGetDetails(response.data)
            // console.log(response.data);
        }
        fetchData()
    }, [])




    const [score, setScore] = useState<number>()
    const [fairway, setFairway] = useState<string>()
    const [green, setGreen] = useState<string>()
    const [approach, setApproach] = useState<string>()
    const [penalty, setPenalty] = useState<number>()
    const [putts, setPutts] = useState<number>()


    //send to edit route
    const updateHole = async (e: any, id: number) => {
        e.preventDefault()

        const newPostObj = {
            id: id,
            hole: getDetails.map((data: any) => data.hole),
            par: getDetails.map((data: any) => data.par),
            roundId: getDetails.map((data: any) => data.roundId),
            score: score,
            fairway: fairway,
            green: green,
            approach: approach,
            penalty: penalty,
            putts: putts
        }

        console.log(newPostObj)

        try {
            const response = await axios.put(`http://localhost:3000/agaps/${id}`, newPostObj)
            // const response = await axios.put(`https://agaps-a-golf-analyze-web-app.onrender.com/agaps/${id}`, newPostObj)
            console.log(response.data);
            setGetDetails((prev: any) => [...prev, response.data])
        } catch (error) {
            console.log(error)
        }

    }

    console.log(getDetails);


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
                            {/* <label htmlFor="score">Score:</label>
                            <input type="text" id="score" name="score" onChange={(e) => setScore(Number(e.target.value))} value={score} placeholder={data.score} />
                            <label htmlFor="fairway">Fairway:</label>
                            <input type="text" id="fairway" name="fairway" onChange={(e) => setFairway(e.target.value)} value={fairway} />
                            <label htmlFor="green">Green:</label>
                            <input type="text" id="green" name="green" onChange={(e) => setGreen(e.target.value)} value={green} />
                            <label htmlFor="approach">Approach:</label>
                            <input type="text" id="approach" name="approach" onChange={(e) => setApproach(e.target.value)} value={approach} />
                            <label htmlFor="penalty">Penalty:</label>
                            <input type="text" id="penalty" name="penalty" onChange={(e) => setPenalty(Number(e.target.value))} value={penalty} />
                            <label htmlFor="putts">Putts:</label>
                            <input type="text" id="putts" name="putts" onChange={(e) => setPutts(Number(e.target.value))} value={putts} /> */}

                            <button onClick={(e) => updateHole(e, data.id)}><MdEdit /></button>

                        </div>
                    )
                })
            }
        </>
    )
}
export default HoleDetail