import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue"> Blue </Link>
      <Link to="/red">Red</Link>
      <Link to="/yellow">Yellow</Link>
      <Link to="/purple"> Purple </Link>
    </div>
  );
};
export default Navbar;
