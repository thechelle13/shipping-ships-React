import { Routes, Route } from 'react'
import { ApplicationViews } from './views/ApplicationView'
import './App.css'


export const App = () => {
  return (
    <Routes>
      
      <Route path="*" element={
        <Authorized>
          <ApplicationViews />
        </Authorized>
      } 
      />
    </Routes>
  )
}