import React from "react";
// import styled from "styled-components";
import { Link } from "gatsby";

export const Header = () => (
  <div className="Navigation Navigation--light">
    <div className="Navigation-body">
      <nav className="Navigation-left" />
      <div className="Navigation-center Hero">
        <a href="/"> Sam's Blog</a>
      </div>
      <nav className="Navigation-right" />
    </div>
  </div>
);
