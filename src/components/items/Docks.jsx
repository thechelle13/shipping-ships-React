import { useState, useEffect } from "react"
import { getAllDocks } from "../../services/DocksService"


export const Docks = () => {

    const [docks, setDocks] = useState([])

    useEffect(()=> {
        getAllDocks().then((dockArray) => {
            setDocks(dockArray)
        })
    }, [])

    return  (
        <div>
          <header>Docks</header>
          <ul>
          {docks.map((dock) => (
            <div key={dock.id}>
              <h2>Location: {dock.location}</h2>
              <p> Capacity: {dock.capacity}</p>
             
                {/* {dock.haulers.map((hauler) => (
                  <li key={hauler.id}>{hauler.name}</li>
                ))}
               */}
            </div>
          ))}
             </ul>
        </div>
      );
}

