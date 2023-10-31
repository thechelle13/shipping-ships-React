import { useState, useEffect } from "react"
import { getAllDocks } from "../../services/DocksService"
import { getAllHaulers } from "../../services/HaulersService"


export const Docks = () => {

    const [docks, setDocks] = useState([])
    const [haulers, setHaulers] = useState([])

    useEffect(()=> {
        getAllDocks().then((dockArray) => {
            setDocks(dockArray)
        })
    }, [])

    useEffect(()=> {
        getAllHaulers().then((haulerArray) => {
            setHaulers(haulerArray)
        })
    }, [])

    return  (
        <section>
          <header>Docks</header>
          <ul>
          {docks.map((dock) => (
            <li key={dock.id}>
              <h2>Location: {dock.location}</h2>
              <p> Capacity: {dock.capacity}</p>
              <ul>
              {haulers
                .filter((hauler) => hauler.dock_id === dock.id) // Filter haulers by dock_id
                .map((hauler) => (
                  <li key={hauler.id}>{hauler.name}</li>
                ))}
            </ul>
            </li>
          ))}
             </ul>
        </section>
      );
}

