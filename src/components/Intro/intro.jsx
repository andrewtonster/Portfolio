import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import { BsPencilSquare } from "react-icons/bs";
import snorlax from "../../assets/snorlax.png";
function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Andrew Ton</span> <br />
        </span>
        <p className="introPara">
          I am a student studying Computer Science at UCSD
          <br />
          and enjoy frontend and backend development!
        </p>
        <Link>
          <button className="btn">
            <BsPencilSquare className="bold-icon" />
            Hire Me
          </button>
        </Link>
      </div>
      <img className="bg" src={snorlax} alt="Profile" />
    </section>
  );
}

export default Intro;
