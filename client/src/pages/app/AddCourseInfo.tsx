import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const AddCourseInfo = () => {


    const navigate = useNavigate()
    const [course, setCourse] = useState<string>("")
    const [round, setRound] = useState<string>("")

    const optionCourse = [
        { value: "", text: ">--Choose--<" },
        { value: "GCK", text: "GCK" }
    ]

    const optionRound = [
        { value: "", text: ">--Choose--<" },
        { value: "half", text: "half" },
        { value: "full", text: "full" }
    ]

    const handleChangeCourse = (e: any) => {
        setCourse(e.target.value)
    }
    const handleChangeRound = (e: any) => {
        setRound(e.target.value)
    }



    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const newPostObj = {

            course: course,
            round: round
        }

        try {
            const response = await axios.post("http://localhost:3000/course-info", newPostObj)
            console.log(response)

            navigate("/hole-card/1")
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div>
            <h2>Add Round</h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                <label htmlFor="course">Course:</label>
                <select name="course" id="course" onChange={handleChangeCourse}>
                    {optionCourse.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
                <label htmlFor="round">Round:</label>
                <select name="round" id="round" onChange={handleChangeRound}>
                    {optionRound.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
                <button type="submit">Add</button>
            </form>
        </div >
    )

}
export default AddCourseInfo