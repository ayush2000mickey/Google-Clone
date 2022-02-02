import React from "react";
import classes from "./HomePage.module.css";
import { useHistory } from "react-router-dom";

import micIcon from "../../Images/mic icon.png";
import logo from "../../Images/google Main page.png";
import { HiOutlineSearch } from "react-icons/hi";

import HomePageHeader from "../HomePageHeader/HomePageHeader";
const HomePage = () => {
  const history = useHistory();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    let searchValue = await event.target[0].value.replace(/[^a-zA-Z0-9 ]/g, "");
    if (searchValue) history.push(`/${searchValue}/all`);
  };

  return (
    <div>
      <HomePageHeader />
      <div className={classes.main}>
        <img className={classes.googleLogo} src={logo} alt="GOOGLElogo"></img>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <div className={classes.inputContainer}>
            <HiOutlineSearch className={classes.searchIcon} />
            <input type="search" />
            <img className={classes.mic} src={micIcon} alt="micLogo" />
          </div>
          <div className={classes.actions_buttons}>
            <div className={classes.button1_container}>
              <button type="submit">Google Search</button>
            </div>
            <div className={classes.button2_container}>
              <button type="submit">I'm Feeling Lucky</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
