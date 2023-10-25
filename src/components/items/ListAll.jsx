import { useState, useEffect } from "react"
import { getAllDocks } from "../../services/DocksService"
import { getAllHaulers } from "../../services/HaulersService"
import { getAllShips } from "../../services/ShipsService"


export const ListAll = () => {
    
    const [ships, setShips] = useState([])
    const [haulers, setHaulers] = useState([])
    const [docks, setDocks] = useState([])

    useEffect(()=> {
        getAllShips().then((shipArray) => {
            setShips(shipArray)
        })
    }, [])

    useEffect(()=> {
        getAllHaulers().then((haulerArray) => {
            setHaulers(haulerArray)
        })
    }, [])

    useEffect(()=> {
        getAllDocks().then((dockArray) => {
            setDocks(dockArray)
        })
    }, [])

    return <section><div>
    <header>Ships</header>
    {ships.map((ship)=> {
        return <div key={ship.id}>{ship.name}</div>
    })}
    </div>

    <div>
    <header>Haulers</header>
    {haulers.map((hauler)=> {
        return <div key={hauler.id}>{hauler.name}</div>
    })}
    </div>
    <div>
    <header>Docks</header>
    {docks.map((dock)=> {
        return <div key={dock.id}>{dock.name}</div>
    })}
    </div>
    </section>
    }