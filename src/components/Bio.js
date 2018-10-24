import React from "react";
import Avatar from "../static/Avatar.jpg";

export const Bio = () => (
  <section className="Articles-list clearfix">
    <div className="Page-alignment Bio-container">
      <img src={Avatar} alt="avatar" className="Bio-avatar" />
      <div className="Bio-content">
        <p className="Category--changelog">
          Hi! I’m <b className="Category--engineering">Sam Zhao</b>, a developer
          based in Brisbane QLD.
        </p>
        <p className="Category--changelog">
          I have a particular interest in web/mobile development. Here are the
          tips and tricks I share with you and hope you find it useful.
        </p>
      </div>
    </div>
  </section>
);
