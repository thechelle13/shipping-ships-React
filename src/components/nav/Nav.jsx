import './Nav.css'
import {Link, useNavigate} from "react-router-dom"


export const NavBar = () => {
    const navigate = useNavigate()
    return (
    <ul className="navbar">
       
        <li className="navbar-item">
            <Link to="/ships" className="navbar-link">Ships</Link>
        </li>
        <li className="navbar-item">
            <Link to="/haulers" className="navbar-link">Haulers</Link>
        </li>
        <li className="navbar-item">
           <Link to="/docks" className="navbar-link">Docks</Link>
        </li>
       
    </ul>
    )
}