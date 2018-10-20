import React from "react";
import { StaticQuery, graphql } from "gatsby";

const TitleAndDescription = data => {
  const { title, defaultDescription } = data.data.site.siteMetadata;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "avenir"
      }}
    >
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <p style={{ marginTop: 0, opacity: 0.5 }}>{defaultDescription}</p>
    </div>
  );
};

export const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              defaultDescription
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  );
};
