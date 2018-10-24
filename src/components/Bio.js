import React from "react";
import Avatar from "../static/Avatar.jpg";

export const Bio = () => (
  <section className="Articles-list clearfix">
    <div className="Page-alignment Bio-container">
      <img src={Avatar} alt="avatar" className="Bio-avatar" />
      <div className="Bio-content">
        <p className="Category--changelog Bio-content-detail">
          Hi! I’m <b className="Category--engineering">Sam Zhao</b>, a developer
          based in Brisbane QLD.
        </p>
        <p className="Category--changelog Bio-content-detail">
          I have a particular interest in web/mobile development. Here are the
          tips and tricks I share with you and hope you find it useful.
        </p>
        <p className="Category--changelog Bio-content-detail">
          Check me on{" "}
          <a href="" className="Link--primary Bio-link ">
            GitHub
          </a>
          ,{" "}
          <a href="" className="Link--primary Bio-link ">
            {" "}
            Twitter{" "}
          </a>{" "}
          or{" "}
          <a href="" className="Link--primary Bio-link ">
            LinkedIn{" "}
          </a>
          .
        </p>
      </div>
    </div>
  </section>
);
