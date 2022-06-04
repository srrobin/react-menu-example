import React, { useEffect, useState } from "react";
import { FaGripHorizontal, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./MenuOne.css";
const MenuOne = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  console.log(screenSize);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <nav>
      {(toggleMenu || screenSize > 500) && (
        <ul className="list" onClick={toggleNav}>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            <li className="items">Home</li>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            <li className="items">About</li>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/work"
          >
            <li className="items">work</li>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/login"
          >
            <li className="items">login</li>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            <li className="items">contact</li>
          </NavLink>
        </ul>
      )}
      <div className="hamburger" onClick={toggleNav}>
        {toggleMenu ? <FaTimes /> : <FaGripHorizontal />}
      </div>
    </nav>
  );
};

export default MenuOne;
