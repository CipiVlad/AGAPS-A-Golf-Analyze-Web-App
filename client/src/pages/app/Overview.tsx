import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";


export const Overview = () => {
    const [getData, setGetData] = useState([])
    const [getDataById, setGetDataById] = useState([])
    const [showData, setShowData] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3000/course-info')
            setGetData(response.data)
            console.log(response.data);
        }
        fetchData()
    }, [])

    // delete by id
    const deleteById = async (id: number) => {
        const response = await axios.delete(`http://localhost:3000/course-info/${id}`)
        setGetDataById(response.data)
        console.log(response.data);
    }




    return (
        <div>
            <h2>Overview</h2>
            {/* show the data of the table concat-tables  */}
            <h3>last rounds</h3>

            <button onClick={() => setShowData(!showData)}>{showData ? 'Hide' : 'Show'}</button>
            {
                showData && getData.map((data: any, index: number) => {
                    return (
                        <div key={index}>
                            <hr />
                            <Link to={`/details/${data.id}`}>Course:{data.course}</Link>
                            <p>Round: {data.round}</p>
                            <p>Date: {data.formattedTimestamp.slice(0, 10)}</p>
                            <button onClick={() => confirm('Are you sure you want to delete?') && deleteById(data.id)}><MdDeleteForever /></button>
                            <button><MdEdit /></button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}