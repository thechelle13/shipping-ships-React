import React, { useState, useEffect } from "react";
import { getAllShips, deleteShip } from "../../services/ShipsService";
import './items.css';

export const Ships = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getAllShips().then((shipsArray) => {
      setShips(shipsArray);
    });
  }, []);

  const handleDelete = (shipId) => {
  
    deleteShip(shipId)
      .then(() => {
       
        setShips((prevShips) => prevShips.filter((ship) => ship.id !== shipId));
      })
      .catch((error) => {
        console.error("Error deleting ship:", error);
      });
  };

  return (
    <div>
      <header>Ships</header>
      <ul>
        {ships.map((ship) => (
          <li key={ship.id}>
            {ship.name}
            <button className="form-btn" onClick={() => handleDelete(ship.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
