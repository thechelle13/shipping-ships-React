import React, { useState, useEffect } from "react";
import { getAllDocks } from "../../services/DocksService";
import { getAllHaulers } from "../../services/HaulersService";
import { getAllShips } from "../../services/ShipsService";

export const ListAll = () => {
  const [ships, setShips] = useState([]);
  const [haulers, setHaulers] = useState([]);
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getAllShips().then((shipArray) => {
      setShips(shipArray);
    });

    getAllHaulers().then((haulerArray) => {
      setHaulers(haulerArray);
    });

    getAllDocks().then((dockArray) => {
        setDocks(dockArray);
      });
  }, []);

  return (
    <section className="lists">
      <header>Shipping Ships App</header>
      

      <div>
        <header>Ships</header>
        {ships.map((ship) => (
          <div key={ship.id}>{ship.name}</div>
        ))}
      </div>

      <div>
        <header>Haulers</header>
        {haulers.map((hauler) => (
          <div key={hauler.id}>{hauler.name}</div>
        ))}
      </div>

      <div>
        <header>Docks</header>
        {docks.map((dock) => (
          <div key={dock.id}>{dock.name}</div>
        ))}
      </div>
    </section>
  );
};
