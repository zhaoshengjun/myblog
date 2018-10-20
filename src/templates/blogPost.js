import React from "react";
import { graphql, Link } from "gatsby";
import { Alert } from "../components/Alert";

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

const Template = ({ data, pageContext }) => {
  // console.log("template::", pageContext);
  const { prev, next } = pageContext;
  const {
    html,
    frontmatter: { title }
  } = data.markdownRemark;

  let isOldPost = true;

  return (
    <div>
      <h1>{title}</h1>
      {isOldPost ? (
        <Alert type="warning">
          This post is over a year old. Some of the content may be out of date.
        </Alert>
      ) : null}
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      {prev && <Link to={prev.fields.slug}>Previous</Link>}
      {next && <Link to={next.fields.slug}>Next</Link>}
    </div>
  );
};

export default Template;
