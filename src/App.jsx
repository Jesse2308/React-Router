import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div id="container">
        <h1></h1>
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-seection">
          <Routes>
            <Route path="/blue" element={<h1>Blue</h1>} />
            <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
