import { Outlet, Route, Routes } from "react-router-dom";
import { Ships } from "../components/items/Ships";
import { Haulers } from "../components/items/Haulers";
import { EditHauler } from "../components/forms/EditHauler";
import { Docks } from "../components/items/Docks";
import { NavBar } from "../components/nav/Nav";
import { ListAll } from "../components/items/ListAll";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
         <Route index element={<ListAll />} />
        <Route path="/" element={<ListAll />} />
        
        <Route path="ships" element={<Ships />} />
        <Route
          path="haulers"
          element={<Haulers />}
        >
          <Route index element={<Haulers />} />
          <Route path="edit/:haulerId" element={<EditHauler />} />
        </Route>
        <Route path="docks" element={<Docks />} />
      </Route>
    </Routes>
  );
};
