import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './component/Auth/Register';
import Login from './component/Auth/Login';
import Home from './component/Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
