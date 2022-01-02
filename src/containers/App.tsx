import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home/index"


function App() {
  return (
    <Routes>
      <Route path="/explore" element={Home} />
    </Routes>
  );
}

export default App;
