import { useContext , useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./scenes/home/Home.jsx"


function App() {
  
  return (
    <div className="app"> 
    <main className="content">
     <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes>
    </main>
    </div>
  )
}

export default App
