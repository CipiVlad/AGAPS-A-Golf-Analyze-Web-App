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
                            <label htmlFor="score">Score:</label>
                            <input type="text" id="score" name="score" onChange={handleInputChange} value={inputState.score || data.score} placeholder={data.score} />
                            <label htmlFor="fairway">Fairway:</label>
                            <input type="text" id="fairway" name="fairway" onChange={handleInputChange} value={inputState.fairway || data.fairway} />
                            <label htmlFor="green">Green:</label>
                            <input type="text" id="green" name="green" onChange={handleInputChange} value={inputState.green || data.green} />
                            <label htmlFor="approach">Approach:</label>
                            <input type="text" id="approach" name="approach" onChange={handleInputChange} value={inputState.approach || data.approach} />
                            <label htmlFor="penalty">Penalty:</label>
                            <input type="text" id="penalty" name="penalty" onChange={handleInputChange} value={inputState.penalty || data.penalty} />
                            <label htmlFor="putts">Putts:</label>
                            <input type="text" id="putts" name="putts" onChange={handleInputChange} value={inputState.putts || data.putts} />


                        </div>
                    )
                })
            }
            <button onClick={(e) => updateHole(e)}><MdEdit /></button>
        </>
    )
}
export default HoleDetail
