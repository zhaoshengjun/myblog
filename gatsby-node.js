const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  //   console.log("createPages::", actions);
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
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        let posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({ node }, index) => {
          // const filePath = node.frontmatter.fileAbsoultePath;
          // const path = filePath
          //   .split("/")
          //   .pop()
          //   .replace(".md", "");
          const path = node.frontmatter.path;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node
            }
          });
        });
      })
    );
  });
};
