import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Blue, Red, Yellow, Purple } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div id="main-seection">
      <Navbar />
      <div id="container">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blue" element={<Blue />}></Route>
          <Route path="/red" element={<Red />}></Route>
          <Route path="/yellow" element={<Yellow />}></Route>
          <Route path="/purple" element={<Purple />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
