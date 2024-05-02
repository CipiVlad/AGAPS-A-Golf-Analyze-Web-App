import { Link, useLocation } from "react-router-dom"
import { gckHoles, gckAPI } from "../models/gck_holes_api"


const HoleCard = () => {
    const { pathname } = useLocation()

    const handleIncrement = () => {
        //add 1 to the hole number 
        //when reaching 10 continue at 11 
        const nextHole = Number(pathname.slice(-1)) + 1 > 10 ? 11 : Number(pathname.slice(-1)) + 1
        return nextHole

    }

    const handleDecrement = () => {
        const previousHole = Number(pathname.slice(-1)) - 1
        return previousHole
    }


    console.log(pathname);


    return (
        <div>
            {
                // pathname === '/hole-card/1'
                //     ? (
                //         <>
                //             <h2>Hole: {gckHoles[0].hole}</h2>
                //             <h3>Par: {gckHoles[0].par}</h3>
                //             <Link to={`/hole-card/${gckHoles[0].hole + 1}`}>Next</Link>                        </>
                //     )
                //     :
                //     (
                //         <>
                //             {/* <h2>Hole {pathname.slice(-1)} of 18</h2> */}
                //             {/* <h3>Par: {gckHoles[Number(pathname.slice(-1)) - 1].par}</h3> */}
                //             <Link to={`/hole-card/${Number(pathname.slice(-1)) - 1}`}>Previous</Link>
                //             <Link to={`/hole-card/${Number(pathname.slice(-1)) + 1}`}>Next</Link>

                //         </>
                //     )

                <>
                    <h2>Hole: {gckHoles[0].hole}</h2>
                    <h3>Par: {gckHoles[0].par}</h3>
                    <Link to={`/hole-card/${handleIncrement()}`}>Next</Link>

                </>
            }


        </div>
    )
}
export default HoleCard