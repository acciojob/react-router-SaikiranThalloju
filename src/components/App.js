
import React from "react";
import './../styles/App.css';
import { Route,Routes } from 'react-router-dom'
import Home from "./Home";
import About from "./About";


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <a href = "/"><Home/></a>
        <Routes>
            <Route path="/about" element={<About/>}/>
        </Routes>
      
    </div>
  )
}

export default App
