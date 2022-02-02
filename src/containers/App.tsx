import React from "react";
import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Login from "../components/Login/index";
import Home from "../components/Home/index";
import LayoutTemplate from "./LayoutTemplate";

// A JavaScript comment of // prettier-ignore will exclude the next node in the abstract syntax tree from formatting.

function App() {
  const LoginContainer = () => <div></div>;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<LayoutTemplate />}>
          <Route path="/explore" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
