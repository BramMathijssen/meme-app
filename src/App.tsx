import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Memes from "./pages/Memes";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Login from "./pages/Login";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/memes" />} />
        <Route path="/memes" element={<Memes />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
