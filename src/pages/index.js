import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import { Layout } from "../components/Layout";
import { ArticleCard } from "../components/ArticleCard";
import Avatar from "../static/Avatar.jpg";

require("../static/styles.css");

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        defaultTitle
        defaultDescription
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
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
    }
  }
`;
const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const meta = data.site.siteMetadata;
  return (
    <Layout>
      <div>
        <main>
          <Helmet title={meta.defaultTitle}>
            <meta name="twitter:title" content={meta.defaultTitle} />
            <meta
              name="twitter:description"
              content={meta.defaultDescription}
            />
          </Helmet>
          <section className="Articles-list clearfix">
            <div className="Page-alignment Bio-container">
              <img src={Avatar} alt="avatar" className="Bio-avatar" />
              <div className="Bio-content">
                <p className="Category--changelog">
                  Hi! I’m <b>Sam</b>, a developer based in Brisbane QLD.
                </p>
                <p className="Category--changelog">
                  I have a particular interest in web/mobile development. Here
                  are the tips and tricks I share with you and hope you find it
                  useful.
                </p>
              </div>
            </div>
          </section>
          <section className="Articles-list clearfix">
            <div className="Page-alignment">
              <h1 className="Article-title Section-recent">Recent articles</h1>
              {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => (
                  <ArticleCard key={post.frontmatter.title} post={post} />
                ))}
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};
// somehow this has to be a default export
export default Index;
