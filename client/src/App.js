import React from "react";
import Register from "./component/Auth/Register";
import Home from "./component/Pages/Home";
import Login from './component/Auth/Login'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
