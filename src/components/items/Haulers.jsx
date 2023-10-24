import { useState, useEffect } from "react"
import { getAllHaulers } from "../../services/HaulersService"


export const Haulers = () => {
    const [haulers, setHaulers] = useState([])

    useEffect(()=> {
        getAllHaulers().then((haulerArray) => {
            setHaulers(haulerArray)
        })
    }, [])

    return <>{<Haulers/>}</>
}