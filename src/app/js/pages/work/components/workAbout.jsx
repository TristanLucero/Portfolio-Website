import React from "react";
import { Typography, Divider } from "@material-ui/core";
import "./workAbout.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  aboutText: {
    fontSize: "2vw",
  },
  divider: {
    "background-color": "black",
  },
  bioText: {
    "padding-top": "3vw",
    width: "35vw",
    fontSize: "1.3vw",
  },
  skillsText: {
    "padding-top": "3vw",
    "white-space": "pre",
    fontSize: "1.3vw",
  },
});

export default function workAbout() {
  const classes = useStyles();

  const bioText =
    "I am a full stack software engineer currently studying Computer Science at Texas Tech University. I have previously worked at Intuit as a full-stack software engineer intern, where I used React, Javascript, HTML, CSS, and Java to build out our full-stack applications.";
  const skillsText =
    "React\t•\tVue\t•\tJavascript\t•\tHTML\t•\tCSS\t•\tJava\t•\tPython\t•\tC\t•\tJest\t•\tRedux";

  return (
    <div className="aboutWrapper">
      <Typography className={classes.aboutText}>About</Typography>
      <Divider className={classes.divider} />
      <div className="aboutParagraphWrapper">
        <Typography className={classes.bioText}>{bioText}</Typography>
      </div>
      <Typography className={classes.skillsText} align="center">
        {skillsText}
      </Typography>
    </div>
  );
}
