const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  //   console.log("createPages::", actions);
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blogPost.js");
    resolve(
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `).then(result => {
        // console.log("createPages::query::", result);
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          // const filePath = node.frontmatter.fileAbsoultePath;
          // const path = filePath
          //   .split("/")
          //   .pop()
          //   .replace(".md", "");
          console.log("createPages::node::", node);
          const path = node.frontmatter.path;

          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path
            }
          });
        });
      })
    );
  });
};
