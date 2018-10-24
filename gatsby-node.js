const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const BLOG_POST_SLUG_REGEX = /^\/.+\/([\d]{4})-([\d]{2})-([\d]{2})-(.+)\/$/;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const permalink = node.frontmatter.path;
    const relativePath = createFilePath({
      node,
      getNode,
      basePath: "pages"
    });

    let slug = permalink;

    if (!slug && relativePath.includes("journal")) {
      // Generate final path + graphql fields for blog posts
      const match = BLOG_POST_SLUG_REGEX.exec(relativePath);
      if (match) {
        const year = match[1];
        const month = match[2];
        const day = match[3];
        const filename = match[4];

        slug = `/journals/${filename}/`;

        const date = new Date(
          Number.parseInt(year),
          Number.parseInt(month) - 1,
          Number.parseInt(day)
        );

        // Blog posts are sorted by date and display the date in their header.
        createNodeField({
          node,
          name: "date",
          value: date.toJSON()
        });
      }
    }

    if (!slug) {
      slug = relativePath;
    }

    // Used to generate URL to view this content.
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blogPost.js");
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({ node }, index) => {
          const { slug } = node.fields;
          createPage({
            path: slug,
            component: blogPostTemplate,
            context: {
              slug,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node
            }
          });
        });
      })
    );
  });
};
