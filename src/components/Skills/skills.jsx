import React from "react";
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
            <img
              src="src/assets/reactBadge.png"
              alt=""
              className="skillBarImg"
            />
            <img
              src="src/assets/htmlBadge.png"
              alt=""
              className="skillBarImg"
            />
            <img src="src/assets/cssBadge.png" alt="" className="skillBarImg" />
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Backend and Databases</h2>
            <p>SQL, MongoDB</p>
          </div>
          <div className="skillBarImgs">
            <img src="src/assets/sqlBadge.png" alt="" className="skillBarImg" />
            <img
              src="src/assets/mongoBadge.png"
              alt=""
              className="skillBarImg"
            />
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Languages</h2>
            <p>Python, C++</p>
          </div>
          <div className="skillBarImgs">
            <img
              src="src/assets/pythonBadge.png"
              alt=""
              className="skillBarImg"
            />
            <img src="src/assets/C++Badge.png" alt="" className="skillBarImg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
