import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import { BsPencilSquare } from "react-icons/bs";
import duckoo3 from "../../assets/duckoo3.png";

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
          and enjoy frontend and backend development.
          <br />
          Feel free to take a look at what I have built!
        </p>
        <a
          href="https://www.linkedin.com/in/andrew-ton-367b18253/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <BsPencilSquare className="bold-icon" />
            Hire Me
          </button>
        </a>
      </div>
      <p className="shaking-text">I LOVE DUCKS!</p>
      <img className="bg" src={duckoo3} alt="Profile" />
    </section>
  );
}

export default Intro;
