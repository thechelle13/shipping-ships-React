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
      

      <section>
        <header>Ships</header>
        {ships.map((ship) => (
          <div key={ship.id}>{ship.name}</div>
        ))}
      </section>

      <section>
        <header>Haulers</header>
        {haulers.map((hauler) => (
          <div key={hauler.id}>{hauler.name}</div>
        ))}
      </section>

      <section>
        <header>Docks</header>
        {docks.map((dock) => (
          <div key={dock.location}>{dock.location}</div>
        ))}
      </section>
    </section>
  );
};
