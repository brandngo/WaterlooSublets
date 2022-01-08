import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home/index"


function App() {
  return (
    <div>
      <Routes>
        <Route path="explore" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
