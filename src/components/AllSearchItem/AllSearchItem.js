import React from "react";
import classes from "./AllSearchItem.module.css";

import { HiExternalLink } from "react-icons/hi";

const AllSearchItem = ({ item }) => {
  return (
    <li className={classes.listItem}>
      <a href={item.link} target="_blank" rel="noreferrer">
        <div className={classes.linkpara1}>
          {item.displayLink} <HiExternalLink />
        </div>

        <div className={classes.linkpara2}>{item.title}</div>
      </a>
      <div>{item.snippet}</div>
    </li>
  );
};

export default AllSearchItem;
