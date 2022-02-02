import React from "react";
import classes from "./TextSkeleton.module.css";
import cx from "classnames";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TextSkeleton = () => {
  return (
    <div className={classes.skeletonlistItem}>
      <div className={classes.skeletonlinks}>
        <Skeleton />
      </div>
      <div className={cx(classes.skeletonlinks, classes.title)}>
        <Skeleton />
      </div>
      <div>
        <Skeleton count={2} />
      </div>
    </div>
  );
};

export default TextSkeleton;
