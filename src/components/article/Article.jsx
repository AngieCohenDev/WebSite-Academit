import React from "react";
import "./article.css";

const Article = ({ imgUrl, title }) => {
  return (
    <div className="acad__blog-container_article">
      <div className="acad__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="acad__blog-container_article-content">
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>Inscríbete para acceder al conocimiento</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
