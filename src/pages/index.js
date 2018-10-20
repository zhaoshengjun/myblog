import React from "react";
import { graphql } from "gatsby";
import { Header } from "../components/Header";

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark {
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
        return <div key={frontmatter.path}>{frontmatter.title}</div>;
      })}
    </div>
  );
};

// somehow this has to be a default export
export default Layout;
