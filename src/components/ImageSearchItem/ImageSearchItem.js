import React from "react";
import classes from "./ImageSearchItem.module.css";

import { HiExternalLink } from "react-icons/hi";

const ImageSearchItem = ({ item }) => {
  return (
    <div className={classes.listItem}>
      <div className={classes.imgContainer}>
        <img className={classes.image} src={item.link} alt={item.title} />
      </div>
      <a href={item.image.contextLink} target="_blank" rel="noreferrer">
        <div className={classes.linkpara2}>{item.title}</div>
        <div className={classes.linkpara1}>
          {item.displayLink} <HiExternalLink />
        </div>
      </a>
    </div>
  );
};

export default ImageSearchItem;
