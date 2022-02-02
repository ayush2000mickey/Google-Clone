import React from "react";
import classes from "./AppsBar.module.css";
import { useParams, NavLink } from "react-router-dom";

import { HiOutlineSearch } from "react-icons/hi";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
const AppsBar = () => {
  const params = useParams();

  return (
    <div className={classes.appsbar}>
      <NavLink
        to={`/${params.id}/all`}
        activeClassName={classes.active}
        className={classes.app}
      >
        <span className={`${classes.toggles} ${classes.all}`}>
          <HiOutlineSearch className={classes.searchIcon} />
          All
        </span>
      </NavLink>
      <NavLink
        to={`/${params.id}/images`}
        activeClassName={classes.active}
        className={classes.app}
      >
        <span className={`${classes.toggles} ${classes.images}`}>
          <BsImage className={classes.searchIcon} />
          Images
        </span>
      </NavLink>
      <NavLink
        to={`/${params.id}/news`}
        activeClassName={classes.active}
        className={classes.app}
      >
        <span className={`${classes.toggles} ${classes.news}`}>
          <BiNews className={classes.searchIcon} />
          News
        </span>
      </NavLink>
      <NavLink
        to={`/${params.id}/videos`}
        activeClassName={classes.active}
        className={classes.app}
      >
        <span className={`${classes.toggles} ${classes.videos}`}>
          <RiVideoLine className={classes.searchIcon} />
          Videos
        </span>
      </NavLink>
    </div>
  );
};

export default AppsBar;
