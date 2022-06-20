import React from "react";
import classes from "./ErrorPage.module.css";
import errorImage from "../../Images/errorImg.png";

const ErrorPage = () => {
  return (
    <div className={classes.errorImageContainer}>
      <img src={errorImage} alt="" />
    </div>
  );
};

export default ErrorPage;
