import React from "react";
import reactBadge from "../../assets/reactBadge.png";
import htmlBadge from "../../assets/htmlBadge.png";
import cssBadge from "../../assets/cssBadge.png";
import mongoBadge from "../../assets/mongoBadge.png";
import pythonBadge from "../../assets/pythonBadge.png";
import cPlusPlusBadge from "../../assets/C++Badge.png";
import sqlBadge from "../../assets/sqlBadge.png";
import "./skills.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">Technologies</span>
      <span className="skillDesc">
        I've worked with a range of technologies to build projects, from
        front-end interfaces to back-end systems. Here are some of the key tools
        and frameworks I've used to make dynamic and engaging projects.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Frontend Technologies</h2>
            <p>React, HTML, CSS</p>
          </div>
          <div className="skillBarImgs">
            <img src={reactBadge} alt="" className="skillBarImg" />
            <img src={htmlBadge} alt="" className="skillBarImg" />
            <img src={cssBadge} alt="" className="skillBarImg" />
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Backend and Databases</h2>
            <p>SQL, MongoDB</p>
          </div>
          <div className="skillBarImgs">
            <img src={sqlBadge} alt="" className="skillBarImg" />
            <img src={mongoBadge} alt="" className="skillBarImg" />
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Languages</h2>
            <p>Python, C++</p>
          </div>
          <div className="skillBarImgs">
            <img src={pythonBadge} alt="" className="skillBarImg" />
            <img src={cPlusPlusBadge} alt="" className="skillBarImg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
