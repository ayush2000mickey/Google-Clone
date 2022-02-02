import React from "react";
import classes from "./HomePageHeader.module.css";

import { CgMenuGridR } from "react-icons/cg";
import { BsPersonCircle } from "react-icons/bs";
const HomePageHeader = () => {
  return (
    <div className={classes.header}>
      <span className={classes.text}>Gmail</span>
      <span className={classes.text}>Images</span>
      <span>
        <CgMenuGridR className={classes.Icon} />
      </span>
      <span>
        <BsPersonCircle className={classes.Icon} />
      </span>
    </div>
  );
};

export default HomePageHeader;
