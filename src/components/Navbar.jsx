import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
const Navbar = () => {
  const [color, setcolor] = useState("green");
  const click = (color) => {
    setcolor(color);
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div id="navbar">
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/blue" onClick={() => click("blue")}>
          Blue
        </Link>
      </button>
      <button>
        <Link to="/red" onClick={() => click("red")}>
          Red
        </Link>
      </button>
      <button>
        <Link to="/yellow" onClick={() => click("yellow")}>
          Yellow
        </Link>
      </button>
      <button>
        <Link to="/purple" onClick={() => click("purple")}>
          Purple
        </Link>
      </button>
    </div>
  );
};
export default Navbar;
