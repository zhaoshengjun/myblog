import React from "react";
import { Link } from "gatsby";
import { Layout } from "./Layout";

export const Article = ({ props: { data, pageContext } }) => {
  const { prev, next } = pageContext;
  const {
    html,
    frontmatter: { title }
  } = data.markdownRemark;
  return (
    <Layout>
      <div className="Page-alignment">
        <article className="Article fade-in Article--featured">
          <header className="Article-header">
            <div className="Article-categoryContainer">Tags</div>
            <h1 className="Article-title">{title}</h1>
          </header>
          <div
            className="Article-body Content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="Article-footer">
            <Link to={"/"} className="Link--muted">
              <svg
                className="icon-back-arrow"
                width="15px"
                height="12px"
                viewBox="0 0 15 12"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
              Back
            </Link>
            <a href="/" className="Link--primary Link--animatedHover">
              Subscribe
            </a>
          </div>
        </article>
      </div>
    </Layout>
  );
};
