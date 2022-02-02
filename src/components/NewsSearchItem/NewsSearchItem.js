import React from "react";
import classes from "./NewsSearchItem.module.css";

import { HiExternalLink } from "react-icons/hi";

const NewsSearchItem = ({ article }) => {
  return (
    <li className={classes.listItem}>
      <a href={article.url} target="_blank" rel="noreferrer">
        <div className={classes.left}>
          <div className={classes.linkpara1}>
            {article.source.name} <HiExternalLink />
          </div>
          <div className={classes.linkpara2}>{article.source.url}</div>
          <div className={classes.description}>{article.description}</div>
        </div>
        <div className={classes.right}>
          <img src={article.image} alt="articleImg" />
        </div>
      </a>
      <div className={classes.date}>{article.publishedAt.split("T")[0]}</div>
    </li>
  );
};

export default NewsSearchItem;
