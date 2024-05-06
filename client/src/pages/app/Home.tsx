import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CSpinner } from "@coreui/react"

const Home = () => {

    // until auth component is ready
    return (
        <div>
            <h1>AGAPS</h1>
            <p>Track Your Golf (R)evolution</p>

            <CSpinner />

            {/* when auth component is ready */}

            {/* <div>
                <button>Sign Up</button>
                <button>Log In</button>
            </div> */}
        </div>
    )
}
export default Home