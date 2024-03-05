import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 

import React from 'react';
import TwoD from './pages/TwoD';
import ThreeD from './pages/ThreeD';
function App() {
 return(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<TwoD />}></Route> */}
      <Route path="/" element={<ThreeD />}></Route>
    </Routes>
  </BrowserRouter>
 )
}

export default App;
