import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/index";
import Home from "../components/Home/index";
import CreateListing from "../components/CreateListing/index";

import ProtectedRoutes from "./ProtectedRoute";

// A JavaScript comment of // prettier-ignore will exclude the next node in the abstract syntax tree from formatting.

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="explore" element={<Home />} />
        <Route path="create" element={<CreateListing />} />
      </Route>
    </Routes>
  );
}

export default App;
