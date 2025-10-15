import React from "react";
import "./works.css";
import atladle from "../../assets/atladle.png";
import ucsdHarborCover from "../../assets/ucsdHarborCover.png";
import portfolioCover from "../../assets/portfolioCover.png";
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
        <a
          href="https://github.com/andrewtonster/UCSD-Food-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ucsdHarborCover} alt="" className="worksImg" />
        </a>
        <a
          href="https://github.com/andrewtonster/atla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={atladle} alt="" className="worksImg" />
        </a>

        <a
          href="https://github.com/andrewtonster/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={portfolioCover} alt="" className="worksImg" />
        </a>
      </div>
      {/* <button className="workBtn">See more</button> */}
    </section>
  );
}

export default Works;
