import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import { Box } from "@rebass/grid";
import styled from "styled-components";

import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Text, P } from "../components/Typography";
import Section, { SectionTitle } from "../components/Section";
// require("../static/styles.css");

const PostDate = styled(Text)`
  font-size: 0.8em;
  display: block;
`;

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
          <Section pt={[20, 40]}>
            <P>
              <span role="img" aria-label="wave">
                👋
              </span>
              <br />
              I’m Sam, a developer based in Brisbane QLD.
            </P>
            <P>
              I have a particular interest in web/mobile development. Here are
              the tips and tricks I share with you and hope you find it useful.
            </P>
          </Section>
          <Section>
            <SectionTitle>Recent articles</SectionTitle>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => (
                <Box mb={2} key={post.frontmatter.title}>
                  <Text>
                    <Link
                      to={post.fields.slug}
                      style={{ textDecoration: "none" }}
                    >
                      {post.frontmatter.title}
                      <PostDate is="time" dateTime={post.fields.date}>
                        {post.fields.date}
                      </PostDate>
                    </Link>
                  </Text>
                </Box>
              ))}
          </Section>
        </main>
      </div>
    </Layout>
  );
};

// somehow this has to be a default export
export default Index;
