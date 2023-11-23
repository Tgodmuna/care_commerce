import React from "react";
import Register from "./component/Auth/Register";
import Home from "./component/Pages/Home";
import Dashboard from "./component/Pages/Dashboard";
import Login from './component/Auth/Login'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
