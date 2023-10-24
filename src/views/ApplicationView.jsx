import { Route } from "react-router-dom";

export const ApplicationViews = () => {

   
    return <Routes>
              <Route 
              path="/" 
              element={
                <>
                <NavBar />
              
                <Outlet />
                </>
              }
              >
               
              {/* <Route path="ships" element={<Ships currentUser={currentUser}/> }/> */}
              <Route path="ships">
                <Route index element={<Ships />} />
                {/* <Route path=":shipId" element={<DeleteShip />} /> */}
              </Route>
              <Route path="haulers">
                <Route index element={<Haulers />} />
                <Route path=":haulerId" element={<EditHauler/>}/>
              </Route>
                <Route path="docks" element={<Docks />}/>
              </Route>
    </Routes>
  }