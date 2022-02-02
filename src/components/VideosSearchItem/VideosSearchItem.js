import React from "react";
import classes from "./VideosSearchItem.module.css";

import { BiChevronRight } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

const VideosSearchItem = ({ video }) => {
  return (
    <li className={classes.listItem}>
      <div className={classes.top}>
        <a
          href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className={classes.linkpara1}>
            www.youtube.com <BiChevronRight />
            <span className={classes.channeltitle}>
              {video.snippet.channelTitle}
            </span>
          </div>
          <div className={classes.linkpara2}>{video.snippet.title}</div>
        </a>
      </div>
      <div className={classes.bottom}>
        <div className={classes.left}>
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.channelTitle}
            />
          </a>
        </div>
        <div className={classes.right}>
          <div className={classes.description}>{video.snippet.description}</div>
          <div className={classes.title_date}>
            Youtube
            <BsDot />
            {video.snippet.channelTitle}
            <BsDot />
            {video.snippet.publishedAt.split("T")[0]}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideosSearchItem;
