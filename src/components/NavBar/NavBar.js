import React, { useState } from "react";
import classes from "./NavBar.module.css";
import { useParams, useHistory } from "react-router-dom";

import { HiOutlineSearch } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

import logo from "../../Images/google Main page.png";
import micIcon from "../../Images/mic icon.png";

const NavBar = () => {
  const params = useParams();
  const history = useHistory();
  const [inputValue, setInputValue] = useState(params.id);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    let searchValue = await inputValue.replace(/[^a-zA-Z0-9 ]/g, "");
    if (searchValue) history.push(`/${searchValue}/all`);
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.logoAndInput}>
        <div>
          <Link to="/">
            <img className={classes.gLogo} src={logo} alt="GoogleLogo" />
          </Link>
        </div>
        <div className={classes.formDiv}>
          <form className={classes.form} onSubmit={formSubmitHandler}>
            <div className={classes.inputContainer}>
              <input
                value={inputValue}
                type="search"
                onChange={inputChangeHandler}
              />

              <Link to="/voice_search">
                <img className={classes.mic} src={micIcon} alt="micLogo" />
              </Link>
              <HiOutlineSearch
                onClick={formSubmitHandler}
                className={classes.searchIcon}
              />
            </div>
          </form>
        </div>
      </div>
      <div className={classes.rightIcons}>
        <span>
          <AiFillSetting className={classes.Icon} />
        </span>
        <span>
          <CgMenuGridR className={classes.Icon} />
        </span>
        <span>
          <BsPersonCircle className={classes.Icon} />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
