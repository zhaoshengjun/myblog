import React from "react";
import { graphql, Link } from "gatsby";
import { Header } from "../components/Header";

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Header />
      {edges.map(edge => {
        const { frontmatter } = edge.node;
        return (
          <div
            key={frontmatter.path}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "Google Sans"
            }}
          >
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

// somehow this has to be a default export
export default Layout;
