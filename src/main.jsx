import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from "./App";
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from "react-dom/client"

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <main >
//         <h1 >Shipping Ships R</h1>
//         <App />
//       </main>
//     </BrowserRouter>
//   </React.StrictMode>,
// )

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
<BrowserRouter>
<App />
</BrowserRouter>
)

