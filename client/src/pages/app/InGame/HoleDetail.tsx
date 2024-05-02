import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const HoleDetail = () => {
    // here you fetch the hole detail by the course id
    const { id } = useParams()
    const [getDetails, setGetDetails] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3000/concat-tables/${id}`)
            setGetDetails(response.data)
            console.log(response.data);

        }
        fetchData()
    }, [])

    console.log(getDetails);

    return (
        <>
            <h2>Hole Details</h2>
            {
                getDetails.map((data: any, index: number) => {
                    return (
                        <div key={index}>
                            <h4>Hole: {data.hole}</h4>
                            <p>Par: {data.par}</p>
                            <p>Score: {data.score}</p>
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