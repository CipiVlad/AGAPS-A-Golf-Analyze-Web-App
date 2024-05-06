import { Link, useNavigate, useLocation } from "react-router-dom"
import { RiHome4Line } from "react-icons/ri";
import { GrOverview } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdStats } from "react-icons/io";


const Navbar = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const homeStyle = {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '20px',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }

    const navStyle = {
        padding: "5px",
        borderRadius: "10px",
        // position: "fixed",
        bottom: "0",
        right: "0",
        left: "0",
    }


    return (
        <div style={navStyle}>
            <button onClick={() => navigate('/add-round')}><IoAddCircleOutline /></button>
            <button onClick={() => navigate('/overview')}><GrOverview /></button>
            {
                pathname === '/' ? <button style={{ ...homeStyle, display: 'none' }} onClick={() => navigate('/hole-card/1')}><RiHome4Line /></button>
                    : <button onClick={() => navigate('/')}><RiHome4Line /></button>
            }
            <button onClick={() => navigate('/stats')}><IoMdStats /></button>
        </div>
    )
}
export default Navbar