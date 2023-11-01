import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllHaulers, haulerEdited } from "../../services/HaulersService";
import { getAllDocks } from "../../services/DocksService";

export const EditHauler = ({ haulerId }) => {
  const [editHauler, setEditHauler] = useState({
    id: "",
    name: "", 
    dock_id: "",
  });
  const [docks, setDocks] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
  
    Promise.all([getAllHaulers(), getAllDocks()])
      .then(([haulerArray, dockArray]) => {
    
        const foundHauler = haulerArray.find((h) => h.id === parseInt(haulerId, 10));

        if (foundHauler) {
     
          setHauler(foundHauler);
        }
        setDocks(dockArray);
      })
      .catch((error) => {
        console.error("Error fetching hauler data:", error);
      });
  }, [haulerId]);

  const handleSave = (event) => {
    event.preventDefault();

    const updatedHauler = {
      id: editHauler.id,
      name: editHauler.name,
      dock_id: editHauler.dock_id,
    };

   
    haulerEdited(updatedHauler)
      .then((res) => {
        Navigate(`/haulers`);
      })
      .catch((error) => {
        console.error("Error updating hauler data:", error);
      });
  };

  return (
    <section>
      <h2>Edit Hauler</h2>
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor="name">Hauler Name</label>
          <input
            type="text"
            id="name"
            value={editHauler.name} 
            onChange={(e) => setEditHauler({ ...editHauler, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="dock_id">Select Dock</label>
          <select
            id="dock_id"
            value={editHauler.dock_id}
            onChange={(e) => setEditHauler({ ...editHauler, dock_id: e.target.value })}
          >
            {docks.map((dock) => (
              <option key={dock.id} value={dock.id}>
                {dock.location}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Update</button>
      </form>
    </section>
  );
};
