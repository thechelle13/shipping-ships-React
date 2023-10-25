import { useState, useEffect } from "react"
import { getAllShips } from "../../services/ShipsService"


export const Ships = () => {
    const [ships, setShips] = useState([])

    useEffect(()=> {
        getAllShips().then((shipArray) => {
            setShips(shipArray)
        })
    }, [])

    return <div>
    <header>Ships</header>
    {ships.map((ship)=> {
        return <div key={ship.id}>{ship.name}</div>
    })}
    </div>
}