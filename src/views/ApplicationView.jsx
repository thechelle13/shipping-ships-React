import { Route } from "react-router-dom";
import { useState, useEffect } from "react";

export const ApplicationViews = () => {

 
    const [currentUser, setCurrentUser] = useState({})
    
    
    // useEffect(() => {
    //   const localHoneyUser = localStorage.getItem("honey_user")
    //   const honeyUserObject = JSON.parse(localHoneyUser)
    //   setCurrentUser(honeyUserObject)
    // }, [] )
  
  
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
                <Route path=":shipId" element={<DeleteShip />} />
              </Route>
              <Route path="haulers">
                <Route index element={<Haulers />} />
                <Route path=":haulerId" element={<EditHauler/>}/>
              </Route>
                <Route path="docks" element={<Docks />}/>
              </Route>
    </Routes>
  }