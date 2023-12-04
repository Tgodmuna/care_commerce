/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Register from "./component/Auth/Register";
import Home from "./component/Pages/Home";
import Dashboard from "./component/Pages/Dashboard";
import Login from "./component/Auth/Login";
import { Route, Routes } from "react-router-dom";
import New_arrival, { ViewCard } from "./component/FirstHeader/New_arrival";
import Header from "./component/FirstHeader/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/new_arrival' element={<New_arrival />} />
      </Routes>
    </>

    // <div>
    //   <ViewCard />
    // </div>
  );
}

export default App;
