import { Link, useLocation } from "react-router-dom"
import { gckHoles, gckAPI } from "../models/gck_holes_api"
import InputFields from "./InputFields"


const HoleCard = () => {
    const { pathname } = useLocation()
    return (
        <>
            {gckHoles.map((hole: gckAPI, index: number) => {
                return (
                    // render only card mathching the pathname
                    pathname === `/hole-card/${hole.hole}` && (
                        <div key={index}>
                            <h2>Course GCK</h2>
                            <h3>Hole {hole.hole} (Par {hole.par})</h3>
                            <InputFields />
                            <Link to={`/hole-card/${hole.hole + 1}`}>Next</Link>
                            |
                            <Link to={`/hole-card/${hole.hole - 1}`}>Previous</Link>
                        </div>
                    )

                )
            })}
        </>
    )
}
export default HoleCard