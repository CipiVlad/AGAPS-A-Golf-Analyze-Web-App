import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import './HoleDetail.css'
import { MdEdit } from "react-icons/md";

const HoleDetail = () => {
    // here you fetch the hole detail overview
    // by the courseId matching the roundId (courseInfo server)
    const { id } = useParams()
    const [getDetails, setGetDetails] = useState<any>([])
    const [getHoleId, setGetHoleId] = useState<number>()


    // fetch data by id
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3000/agaps/${id}`)
            // const response = await axios.get(`https://agaps-a-golf-analyze-web-app.onrender.com/agaps/${id}`)
            setGetDetails(response.data)
            setGetHoleId(response.data[0].id)
        }
        fetchData()
    }, [id])

    // console.log(getHoleId);




    const [inputState, setInputState] = useState<any>([])

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setInputState((prev: any) => ({
            ...prev,
            [name]: value
        }))
    }

    const updateHole = async (e: any) => {
        e.preventDefault()

        const newPostObj = {
            id: getHoleId,
            hole: getDetails.map((data: any) => data.hole),
            par: getDetails.map((data: any) => data.par),
            roundId: getDetails.map((data: any) => data.roundId),
            score: inputState.score || getDetails.map((data: any) => data.score),
            fairway: inputState.fairway || getDetails.map((data: any) => data.fairway),
            green: inputState.green || getDetails.map((data: any) => data.green),
            approach: inputState.approach || getDetails.map((data: any) => data.approach),
            penalty: inputState.penalty || getDetails.map((data: any) => data.penalty),
            putts: inputState.putts || getDetails.map((data: any) => data.putts)
        }

        // console.log(newPostObj)

        try {
            const response = await axios.put(`http://localhost:3000/agaps/${getHoleId}`, newPostObj)
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
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Hole</th>
                                        <th>Par</th>
                                        <th>Score</th>
                                        <th>Fairway</th>
                                        <th>Green</th>
                                        <th>Approach</th>
                                        <th>Penalty</th>
                                        <th>Putts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{data.hole}</td>
                                        <td>{data.par}</td>
                                        <td>{data.score}</td>
                                        <td>{data.fairway}</td>
                                        <td>{data.green}</td>
                                        <td>{data.approach}</td>
                                        <td>{data.penalty}</td>
                                        <td>{data.putts}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to={`/edit/${data.id}`} state={{ state: data.roundId }}>Edit</Link>
                        </div>
                    )
                })
            }
        </>
    )
}
export default HoleDetail
