import { useState, useEffect } from "react"
import { getAllDocks } from "../../services/DocksService"


export const Docks = () => {

    const [docks, setDocks] = useState([])

    useEffect(()=> {
        getAllDocks().then((dockArray) => {
            setDocks(dockArray)
        })
    }, [])

    return <div>
    <header>Docks</header>
    {docks.map((dock)=> {
        return <div key={dock.id}>{dock.name}</div>
    })}
    </div>

}