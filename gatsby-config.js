module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    author: "Sam Zhao",
    title: `Sam Zhao - Developer`,
    siteUrl: "https://samzhao.gitlab.com",
    defaultTitle: "Sam Zhao | Blog",
    defaultDescription:
      "Sam Zhao is a developer in Brisbane QLD, building useful things (hopefully). Working somewhere on the boundary between design and code."
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    }
  ]
};
