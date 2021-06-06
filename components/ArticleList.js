import React from "react";
import styles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
