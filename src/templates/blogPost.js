import React from "react";
import { graphql } from "gatsby";
import { Article } from "../components/Article";

export const query = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;

const Template = props => <Article props={props} />;

export default Template;
