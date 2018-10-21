import React from "react";
import { graphql, Link } from "gatsby";
import { Alert } from "../components/Alert";
import { Article } from "../components/Article";

export const query = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        author
        defaultTitle
        defaultDescription
      }
    }
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
      }
    }
  }
`;

const Template = props => {
  // console.log("template::", pageContext);
  // const { prev, next } = pageContext;
  // const {
  //   html,
  //   frontmatter: { title }
  // } = data.markdownRemark;

  // let isOldPost = true;

  return <Article props={props} />;
};

export default Template;
