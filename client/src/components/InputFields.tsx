import { useState } from "react"
import { gckInput } from "../models/gck_holes_api"

type InputFieldsProps = gckInput



const InputFields = () => {
    const [roundId, setRoundId] = useState<number>(9)
    const [score, setScore] = useState<number>()
    const [fairway, setFairway] = useState<string>()
    const [green, setGreen] = useState<string>()
    const [approach, setApproach] = useState<string>()
    const [penalty, setPenalty] = useState<number>()
    const [putts, setPutts] = useState<number>()

    return (
        <form action="" method="post" style={{ display: 'grid', gap: '10px', gridTemplateColumns: '1fr 1fr', alignItems: 'center', justifyContent: 'center' }}>

            <label htmlFor="RoundId">RoundId</label>
            <input type="text" name="roundId" value={roundId} onChange={(e) => setRoundId(Number(e.target.value))} />

            <label htmlFor="Score">Score</label>
            <input type="text" name="score" value={score} onChange={(e) => setScore(Number(e.target.value))} />

            <label htmlFor="Fairway">Fairway</label>
            <input type="text" name="fairway" value={fairway} onChange={(e) => setFairway(e.target.value)} />

            <label htmlFor="Green">Green</label>
            <input type="text" name="green" value={green} onChange={(e) => setGreen(e.target.value)} />

            <label htmlFor="Approach">Approach</label>
            <input type="text" name="approach" value={approach} onChange={(e) => setApproach(e.target.value)} />

            <label htmlFor="Penalty">Penalty</label>
            <input type="text" name="penalty" value={penalty} onChange={(e) => setPenalty(Number(e.target.value))} />

            <label htmlFor="Putts">Putts</label>
            <input type="text" name="putts" value={putts} onChange={(e) => setPutts(Number(e.target.value))} />

            <label htmlFor="Submit">Submit</label>
            <input type="submit" value="Submit" style={{ width: '100px' }} />
        </form>
    )
}
export default InputFields