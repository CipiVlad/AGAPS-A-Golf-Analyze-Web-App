import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";


export const Overview = () => {
    const [getData, setGetData] = useState([])
    const [getDataById, setGetDataById] = useState([])
    const [showData, setShowData] = useState(false)

    // delete by id
    const deleteById = async (id: number) => {
        const response = await axios.delete(`http://localhost:3000/course-info/${id}`)
        // const response = await axios.delete(`https://agaps-a-golf-analyze-web-app.onrender.com/course-info/${id}`)
        setGetDataById(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3000/course-info')
            // const response = await axios.get('https://agaps-a-golf-analyze-web-app.onrender.com/course-info')
            setGetData(response.data)
            console.log(getData);
        }
        fetchData()
    }, [])


    console.log(getData);



    return (
        <div>
            <h2>Overview</h2>
            {/* show the data of the table concat-tables  */}
            <h3>last rounds</h3>
            {/* show only the last 5 rows */}
            {
                // getData.slice(0, 5).map((data: any, index: number) => {
                getData.map((data: any, index: number) => {


                    return (
                        <div key={index}>
                            <Link to={`/details/${data.roundId}`}>Course:{data.course}</Link>
                            <p>Round: {data.round}</p>
                            <p>Date: {data.formattedTimes}</p>
                            <button onClick={() => confirm('Are you sure you want to delete?') && deleteById(data.id)}><MdDeleteForever /></button>
                            <button><MdEdit /></button>
                            <hr />
                        </div>
                    )
                })
            }
            <button onClick={() => setShowData(!showData)}>{showData ? 'Hide' : 'Show more'}</button>
            {/* {
                showData && getData.slice(5).map((data: any, index: number) => {
                    return (
                        <div key={index}>
                            <hr />
                            <Link to={`/details/${data.courseId}`}>Course:{data.course}</Link>
                            <p>Round: {data.round}</p>
                            <p>Date: {data.formattedTimes.slice(0, 10)}</p>
                            <button onClick={() => confirm('Are you sure you want to delete?') && deleteById(data.id)}><MdDeleteForever /></button>
                            <button><MdEdit /></button>
                            <hr />
                        </div>
                    )
                })
            } */}
        </div>
    )
}