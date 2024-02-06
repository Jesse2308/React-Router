import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Blue, Red, Yellow, Purple } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue"> Blue </Link>
        <Link to="/red">Red</Link>
        <Link to="/yellow">Yellow</Link>
        <Link to="/purple"> Purple </Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blue" element={<Blue />}></Route>
          <Route path="/red" element={<Red />}></Route>
          <Route path="/yellow" element={<Yellow />}></Route>
          <Route path="/purple" element={<Purple />}></Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
