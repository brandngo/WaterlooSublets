import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/index";
import Home from "../components/Home/index";
import CreateListing from "../components/CreateListing/index";

import ProtectedRoutes from "./ProtectedRoute";

function App() {
  let navigate = useNavigate();
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<ProtectedRoutes navigate={navigate} />}>
        <Route path="explore" element={<Home />} />
        <Route path="create" element={<CreateListing />} />
      </Route>
    </Routes>
  );
}

export default App;
