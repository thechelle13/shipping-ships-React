import { useState, useEffect } from "react"
import { getListAll } from "../../services/ListAllService"


export const ListAll = () => {
    const [listAll, setListAll] = useState([])

    useEffect(()=> {
        getListAll().then((listAllArray) => {
            setListAll(listAllArray)
        })
    }, [])

    return <>{<ListAll/>}</>
}