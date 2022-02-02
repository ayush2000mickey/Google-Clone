import React from "react";
import classes from "./NewsSkeleton.module.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewsSkeleton = () => {
  return (
    <div className={classes.skeletonlistItem}>
      <div className={classes.left}>
        <div className={classes.skeletonlinks}>
          <Skeleton count={2} />
        </div>
        <div>
          <Skeleton count={2} />
        </div>
      </div>
      <div className={classes.right}>
        <Skeleton height={80} />
      </div>
    </div>
  );
};

export default NewsSkeleton;
