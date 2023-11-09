import React from "react";
import Register from "./component/Auth/Register";
import Login from "./component/Auth/Login";
import Home from "./component/Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
