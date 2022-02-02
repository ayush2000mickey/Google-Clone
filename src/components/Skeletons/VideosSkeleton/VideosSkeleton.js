import React from "react";
import classes from "./VideosSkeleton.module.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VideosSkeleton = () => {
  return (
    <div className={classes.skeletonlistItem}>
      <div className={classes.left}>
        <Skeleton height={80} />
      </div>
      <div className={classes.right}>
        <div className={classes.skeletonlinks}>
          <Skeleton count={2} />
        </div>
        <div>
          <Skeleton count={2} />
        </div>
      </div>
    </div>
  );
};

export default VideosSkeleton;
