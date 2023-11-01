import { useState, useEffect } from "react"
import { getAllHaulers } from "../../services/HaulersService"
import './items.css'
import { useNavigate } from "react-router-dom"


export const Haulers = () => {
    const [haulers, setHaulers] = useState([])
   
    const Navigate = useNavigate()

    useEffect(()=> {
        getAllHaulers().then((haulerArray) => {
            setHaulers(haulerArray)
        })
    }, [])

    
    
    return (
    <div>
    <header>Haulers</header>
    <ul>
    {haulers.map((hauler)=> {
        <li key={hauler.id}>{hauler.name}
    
    <button className="form-btn" >Edit</button>
    </li>
    })}
    </ul>
    </div>
    )
}