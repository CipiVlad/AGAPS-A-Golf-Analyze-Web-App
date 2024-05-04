import { useNavigate } from "react-router-dom"




const NavbarTop = () => {
    const navigate = useNavigate()
    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '20px',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    }

    return (
        <div>
            <button onClick={() => navigate('/')} style={buttonStyle}>Home</button>
        </div>
    )
}
export default NavbarTop