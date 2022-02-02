import React from "react";
import classes from "./Footer.module.css";
import {
  SiGeeksforgeeks,
  SiLeetcode,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.madeby}>Made With ❤️ By Ayush Kumar</div>
      <div className={classes.links}>
        <a href="https://www.linkedin.com/in/-ayush-kumar-/">
          <SiLinkedin />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/ayush2000mickey/practice/">
          <SiGeeksforgeeks />
        </a>
        <a href="https://leetcode.com/akmickey/">
          <SiLeetcode />
        </a>
        <a href="https://github.com/ayush2000mickey">
          <SiGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
