import React from "react";
import { graphql } from "gatsby";
import { Link } from "@reach/router";

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

const Template = ({ data, pageContext }) => {
  // console.log("template::", pageContext);
  const { prev, next } = pageContext;
  const {
    html,
    frontmatter: { title }
  } = data.markdownRemark;

  return (
    <div>
      <h1>{title}</h1>
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      {prev && <Link to={prev.frontmatter.path}>Previous</Link>}
      {next && <Link to={next.frontmatter.path}>Next</Link>}
    </div>
  );
};

export default Template;
