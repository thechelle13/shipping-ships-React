import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllHaulers, haulerEdited } from "../../services/HaulersService";
import { getAllDocks } from "../../services/DocksService";

export const EditHauler = () => {
  const [hauler, setHauler] = useState({
    id: null,
    name: "",
    dock_id: null,
  });
  const [docks, setDocks] = useState([]);
  const Navigate = useNavigate();
  const { haulerId } = useParams();

  useEffect(() => {
    // Fetch the hauler's information and all docks
    Promise.all([getAllHaulers(), getAllDocks()])
      .then(([haulerArray, dockArray]) => {
        // Find the hauler by ID
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
      id: hauler.id,
      name: hauler.name,
      dock_id: hauler.dock_id,
    };
    
    // Call the function to update the hauler in the database
    haulerEdited(updatedHauler)
      .then((res) => {
        Navigate(`/haulers`);
      })
      .catch((error) => {
        console.error("Error updating hauler data:", error);
      });
  };

  return (
    <div>
      <h2>Edit Hauler</h2>
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor="name">Hauler Name</label>
          <input
            type="text"
            id="name"
            value={hauler.name}
            onChange={(e) => setHauler({ ...hauler, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="dock_id">Select Dock</label>
          <select
            id="dock_id"
            value={hauler.dock_id}
            onChange={(e) => setHauler({ ...hauler, dock_id: e.target.value })}
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
    </div>
  );
};

