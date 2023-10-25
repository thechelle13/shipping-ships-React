import { useState, useEffect } from "react"
import { getAllDocks } from "../../services/DocksService"


export const Docks = () => {

    const [docks, setDocks] = useState([])

    useEffect(()=> {
        getAllDocks().then((dockArray) => {
            setDocks(dockArray)
        })
    }, [])

    return <>{<Docks/>}</>

}