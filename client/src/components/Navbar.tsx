import { Link } from "react-router-dom"


const Navbar = () => {
    const style = { border: "1px solid white", padding: "10px", margin: "10px", borderRadius: "10px" }
    return (
        <div style={style}>
            <Link to="/add-round" style={{ marginRight: "10px" }}>Add Round</Link>
            <Link to="/overview">Overview</Link>
        </div>
    )
}
export default Navbar