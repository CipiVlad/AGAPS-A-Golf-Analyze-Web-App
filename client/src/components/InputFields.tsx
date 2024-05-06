import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './InputFields.css'
import { MdNavigateNext } from "react-icons/md";

const InputFields = ({ hole, par, link }: { hole: number, par: number, link: string }) => {
    const navigate = useNavigate()
    const [roundId, setRoundId] = useState<number>()
    const [score, setScore] = useState<number>()
    const [fairway, setFairway] = useState<string>()
    const [green, setGreen] = useState<string>()
    const [approach, setApproach] = useState<string>()
    const [penalty, setPenalty] = useState<number>()
    const [putts, setPutts] = useState<number>()

    useEffect(() => {

        const fetchData = async () => {
            // const response = await axios.get(`http://localhost:3000/course-info`)
            const response = await axios.get(`https://agaps-a-golf-analyze-web-app.onrender.com/course-info`)
            response.data !== undefined && setRoundId(response.data[0].id)
        }
        fetchData()
    }, [])

    console.log(roundId);






    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const newPostObj = {
            hole: hole,
            par: par,
            roundId: roundId,
            score: score,
            fairway: fairway,
            green: green,
            approach: approach,
            penalty: penalty,
            putts: putts
        }

        console.log(newPostObj)
        // const response = await axios.post('http://localhost:3000/agaps', newPostObj)
        const response = await axios.post('https://agaps-a-golf-analyze-web-app.onrender.com/agaps', newPostObj)
        navigate(link)
        console.log(response.data)
    }




    const style = {
        display: 'grid', gap: '10px', gridTemplateColumns: '1fr 1fr', alignItems: 'center', justifyContent: 'center'
    }
    const styleDisplayHidden = {
        display: 'none'
    }

    return (
        <form
            onSubmit={handleSubmit}
            method="post" style={style}>

            <label htmlFor="RoundId" style={styleDisplayHidden}>RoundId</label>
            <input style={styleDisplayHidden} type="text" name="roundId" value={roundId} onChange={(e) => setRoundId(Number(e.target.value))} />

            <label htmlFor="Score">Score</label>
            <input type="text" name="score" value={score} onChange={(e) => setScore(Number(e.target.value))} />

            <label htmlFor="Fairway">Fairway</label>
            <input type="text" name="fairway" value={fairway} onChange={(e) => setFairway(e.target.value)} />

            <label htmlFor="Green">GIR</label>
            <input type="text" name="green" value={green} onChange={(e) => setGreen(e.target.value)} />

            <label htmlFor="Approach">Approach</label>
            <input type="text" name="approach" value={approach} onChange={(e) => setApproach(e.target.value)} />

            <label htmlFor="Penalty">Penalty</label>
            <input type="text" name="penalty" value={penalty} onChange={(e) => setPenalty(Number(e.target.value))} />

            <label htmlFor="Putts">Putts</label>
            <input type="text" name="putts" value={putts} onChange={(e) => setPutts(Number(e.target.value))} />

            <label htmlFor="Submit">Next Hole</label>
            <MdNavigateNext onClick={handleSubmit} style={{ fontSize: 40 }} />
            {/* <input type="submit" value="Submit" style={{ width: '100px' }} /> */}


        </form>
    )
}
export default InputFields