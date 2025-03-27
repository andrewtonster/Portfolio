import React from "react";
import "./works.css";
import snorlax from "../../assets/snorlax.png";

function Works() {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Here are some of the projects I’ve worked on, showcasing my skills in
        design, development, and problem-solving. Many of these projects are
        inspired by my interests and focus on solving related challenges.
        <br />
        <span className="portfolioCTA">
          Click the icons below to view the project on GitHub!
        </span>
      </span>
      <div className="worksImgs">
        <img src="src/assets/atladle.png" alt="" className="worksImg" />
        <img src={snorlax} alt="" className="worksImg" />
        <img src={snorlax} alt="" className="worksImg" />
        <img src={snorlax} alt="" className=" worksImg" />
      </div>
      {/* <button className="workBtn">See more</button> */}
    </section>
  );
}

export default Works;
