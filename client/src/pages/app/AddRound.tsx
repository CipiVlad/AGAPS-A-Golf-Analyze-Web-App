const AddRound = () => {
    return (
        <div>
            <h2>Add Round</h2>
            <label htmlFor="select_course">Select Course</label>
            <select name="select_course" id="select_course">
                <option value="course">GC</option>
            </select>

            <label htmlFor="holes">How many holes? (9/18)</label>
            <select name="holes">
                <option value="9">9</option>
                <option value="18">18</option>
            </select>
        </div>
    )
}
export default AddRound