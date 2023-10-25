import { useState, useEffect } from "react"
import { getAllHaulers } from "../../services/HaulersService"


export const Haulers = () => {
    const [haulers, setHaulers] = useState([])

    useEffect(()=> {
        getAllHaulers().then((haulerArray) => {
            setHaulers(haulerArray)
        })
    }, [])

    return <div>
    <header>Haulers</header>
    {haulers.map((hauler)=> {
        return <div key={hauler.id}>{hauler.name}</div>
    })}
    </div>
}