import React from "react"
import { Link} from "react-router-dom"
import  "./Landing.css";



const LandingPage = () => {
    // const location = useLocation()
    return (
        <div className="landing">
    
                <Link to="/home">
                    <button className="button">
                        GO POKEMONS!!
                    </button>
                </Link>
        </div>
    )
} 

export default LandingPage