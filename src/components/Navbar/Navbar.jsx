import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setisopen] = useState(false);
  const [isScroll, setisScroll] = useState(false);
  
  
  const editScrollBarHandlear = () => {
   
    if (window.scrollY >= 90) {
      setisScroll(true);
    } else {
      setisScroll(false);
    }
  };

  window.addEventListener("scroll", editScrollBarHandlear);
  

  return (
    <div className={isScroll ? "navbar navbar-change" : "navbar "}>
      <Link to="/">
        <h1> Portfolio </h1>
      </Link>

      <ul className={isOpen ? "navbar-routes active" : "navbar-routes"}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/project">
          <li>project</li>
        </Link>
        <Link to="/contact">
          <li>contact</li>
        </Link>
      </ul>
      <div onClick={() => setisopen(!isOpen)} className="nav-toggle">
        {isOpen ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
