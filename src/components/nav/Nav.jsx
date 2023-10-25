// import "./NavBar.css"
import {Link} from "react-router-dom"


export const NavBar = () => {
    
    return (
    <ul className="navbar">
       
        <li className="navbar-item">
            <Link to="/ships">Ships</Link>
        </li>
        <li className="navbar-item">
            <Link to="/haulers">Haulers</Link>
        </li>
        <li className="navbar-item">
           <Link to="/docks">Docks</Link>
        </li>
       
    </ul>
    )
}