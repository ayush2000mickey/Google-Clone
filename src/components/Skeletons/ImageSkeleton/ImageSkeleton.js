import React from "react";
import Skeleton from "react-loading-skeleton";

import classes from "./ImageSkeleton.module.css";

const ImageSkeleton = () => {
  return (
    <div>
      <div>
        <Skeleton className={classes.image} />
      </div>
      <div>
        <Skeleton count={2} />
      </div>
    </div>
  );
};

export default ImageSkeleton;
