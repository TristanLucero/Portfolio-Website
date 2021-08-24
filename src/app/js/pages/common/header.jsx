import React from "react";
import "./header.css";
import "@fontsource/roboto";
import { Breadcrumbs, Link } from "@material-ui/core";
import { ReactComponent as Initials } from "./svg/initials.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  linkText: {
    fontSize: "1.5vw",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div className="headerWrapper">
      <Initials className="initials" />
      <div className="breadcrumbsWrapper">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator=""
          style={{ color: "black" }}
        >
          <Link
            href="https://docs.google.com/"
            color="inherit"
            className={classes.linkText}
            target="_blank"
          >
            resume
          </Link>
          <Link
            href="https://github.com/tristanlucero"
            color="inherit"
            className={classes.linkText}
            target="_blank"
          >
            github
          </Link>
          <Link
            href="https://www.linkedin.com/in/tristanlucero/"
            color="inherit"
            className={classes.linkText}
            target="_blank"
          >
            linkedin
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default Header;
