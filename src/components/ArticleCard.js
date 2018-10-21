import React from "react";
import { Link } from "gatsby";

export const ArticleCard = props => {
  console.log("CARD::", props);
  const {
    post: {
      excerpt,
      fields: { slug },
      frontmatter: { date, title, tags }
    }
  } = props;
  return (
    <article className="ArticleInList fade-in ArticleInList--cardWhenBig">
      <div className="ArticleInList-category">
        {tags.map(tag => (
          <p href="" className="Category Category--engineering" key={tag}>
            {tag}
          </p>
        ))}
      </div>
      <h2 className="ArticleInList-title">
        <Link to={slug}>{title}</Link>
      </h2>
      <div className="Authors ArticleInList-author">
        <div className="Authors-group">
          <div className="Author-details">
            <cite>
              <a className="Author-name" href="/blog/authors/jeroen-ransijn">
                Jeroen Ransijn
              </a>
            </cite>
          </div>
          <time className="ArticleInListInList-date">on Oct 17th 2018</time>
        </div>
      </div>
      <p className="ArticleInList-teaser">{excerpt}</p>
      <div className="ArticleInList-readMore">
        <Link to={slug}>
          <span className="Link--primary Link--animatedHover ArticleInList-readMoreLink">
            Read more{" "}
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
          </span>
        </Link>
      </div>
    </article>
  );
};
