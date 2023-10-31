import { useState, useEffect } from "react"
import { getAllShips } from "../../services/ShipsService"
import { useNavigate } from "react-router-dom"


export const Ships = () => {
    const [ships, setShips] = useState([])
    const [delShip, setDelShip] =useState([])
    const Navigate = useNavigate()

    useEffect(()=> {
        getAllShips().then((shipsArray) => {
            setShips(shipsArray)
        })
    }, [])

    const handleDelete = (event) => {
        event.preventDefault();
    
        const ShipDel = {
            id: delShip, 
        };
        
        shipDelete(delShip.id).then(() => {
            Navigate(`/Ships`);
        });
        };

    return <div>
    <header>Ships</header>
    {ships.map((ship)=> {
        return <div key={ship.id}>{ship.name}</div>
    })}
    <button className="form-btn" onClick={handleDelete}>Delete</button>


    
        
    </div>
}