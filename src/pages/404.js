import React from "react";

const Error = () => (
  <div style={styles.container}>
    <h1 style={styles.h1}>404</h1>
    <div style={styles.desc}>
      <h2 style={styles.h2}>The page could not be found.</h2>
    </div>
  </div>
);

const styles = {
  container: {
    color: "#000",
    background: "#fff",
    fontFamily: "-apple-system, Sans, sans-serif",
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  h1: {
    display: "inline-block",
    borderRight: "1px solid rgba(0, 0, 0,.3)",
    margin: 0,
    marginRight: "20px",
    padding: "10px 23px 10px 0",
    fontSize: "3rem",
    fontWeight: 500,
    verticalAlign: "top"
  },
  h2: {
    fontSize: "2rem",
    fontWeight: "normal",
    lineHeight: "inherit",
    margin: 0,
    padding: 0
  },
  desc: {
    display: "inline-block",
    textAlign: "left",
    lineHeight: "49px",
    height: "49px",
    verticalAlign: "middle"
  }
};

export default Error;
