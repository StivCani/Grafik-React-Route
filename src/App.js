import React, { useState } from "react";
import SortTable from "./Component/SortTable";
import { BrowserRouter as Router, Route, Routes, useParams} from "react-router-dom";
import Page2 from "./Component/Page2";



function App() {
  
    
    return (
   
        <div className="App">
          <Router>
        <Routes>
          <Route path="/" element={<SortTable/>} />
          <Route path="/:id" element={<Page2/>} />
        </Routes>
      </Router>
             
          
        </div>
    )
}


export default App