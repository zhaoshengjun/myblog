import React from "react";
import { Link } from "gatsby";
import { Layout } from "./Layout";

export const Article = ({ props: { data, pageContext } }) => {
  const { prev, next } = pageContext;
  console.log("Article::pagecontext::", pageContext);
  const {
    html,
    frontmatter: { title, tags }
  } = data.markdownRemark;
  return (
    <Layout>
      <div className="Page-alignment">
        <article className="Article fade-in Article--featured">
          <header className="Article-header">
            <div className="Article-categoryContainer">
              {tags.map(tag => (
                <p href="" className="Category Category--engineering" key={tag}>
                  {tag}
                </p>
              ))}
            </div>
            <h1 className="Article-title">{title}</h1>
          </header>
          <div
            className="Article-body Content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="Article-footer">
            {prev && (
              <Link
                to={prev.fields.slug}
                className="Link--primary Link--animatedHover"
              >
                <svg
                  className="icon-back-arrow"
                  width="15px"
                  height="12px"
                  viewBox="0 0 15 12"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(0.000000, -10.000000)"
                      fill="currentColor"
                    >
                      <g id="Button-Normal">
                        <polygon points="6 21.95 7.25373134 20.6962687 3.40298507 16.8455224 14.3283582 16.8455224 14.3283582 15.0544776 3.40298507 15.0544776 7.25373134 11.2037313 6 9.95 0 15.95" />
                      </g>
                    </g>
                  </g>
                </svg>
                {"  "}
                Prev
              </Link>
            )}
            {next && (
              <Link
                to={next.fields.slug}
                className="Link--primary Link--animatedHover"
              >
                Next{" "}
                <svg
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ArticleInList-readMoreIcon"
                >
                  <path
                    d="M7.556 0L6.42 1.137 9.91 4.63H0v1.626h9.912L6.42 9.75l1.136 1.137L13 5.444"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
            )}
          </div>
        </article>
      </div>
    </Layout>
  );
};
