import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
// import { Box } from "@rebass/grid";
// import styled from "styled-components";

// import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { ArticleCard } from "../components/ArticleCard";
// import { Text, P } from "../components/Typography";
// import Section, { SectionTitle } from "../components/Section";
require("../static/styles.css");

// const PostDate = styled.p`
//   font-size: 0.8em;
//   display: block;
// `;

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
          <section>
            <p>
              <span role="img" aria-label="wave">
                👋
              </span>
              <br />
              I’m Sam, a developer based in Brisbane QLD.
            </p>
            <p>
              I have a particular interest in web/mobile development. Here are
              the tips and tricks I share with you and hope you find it useful.
            </p>
          </section>
          <section className="Articles-list clearfix">
            <h1>Recent articles</h1>
            <div className="Page-alignment">
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
