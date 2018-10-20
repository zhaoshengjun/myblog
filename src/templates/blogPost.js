import React from "react";
import { graphql } from "gatsby";

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

const Template = props => {
  //   console.log("template::", props);
  const {
    html,
    frontmatter: { title }
  } = props.data.markdownRemark;

  return (
    <div>
      <h1>{title}</h1>
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Template;
