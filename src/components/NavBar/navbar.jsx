import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { LuMessageSquareMore } from "react-icons/lu";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const handleContactBurger = () => {
    setShowMenu(false);
    document
      .getElementById("contactPage")
      .scrollIntoView({ behavior: "smooth" });
  };
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <span className="logo">AT</span>
      <div className="desktopMenu">
        <Link
          // activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          rel="stylesheet"
          href=""
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          rel="stylesheet"
          href=""
          className="desktopMenuListItem"
          hashSpy={true}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          rel="stylesheet"
          href=""
          className="desktopMenuListItem"
          hashSpy={true}
        >
          Portfolio
        </Link>
      </div>

      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contactPage")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <LuMessageSquareMore className="desktopMenuImg" />
        <span>Contact Me</span>
      </button>

      <span className="mobMenu" onClick={() => setShowMenu(!showMenu)}>
        <FaBars size={20} className="mobMenuIcon" />
      </span>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          rel="stylesheet"
          href=""
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offsemobile
          duration={500}
          rel="stylesheet"
          href=""
          className="listItem"
          hashSpy={true}
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          rel="stylesheet"
          href=""
          className="listItem"
          hashSpy={true}
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contacts"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          rel="stylesheet"
          href=""
          className="listItem"
          hashSpy={true}
          onClick={handleContactBurger}
        >
          Contacts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
