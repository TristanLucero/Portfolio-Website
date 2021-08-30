import React from "react";
import "./footer.css";
import "@fontsource/roboto";
import { Breadcrumbs, Link, Divider } from "@material-ui/core";
import { ReactComponent as Initials } from "./svg/initials.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Description, GitHub, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles({
  divider: {
    "background-color": "black",
  },
  icons: {
    fontSize: "2vw",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Divider className={classes.divider} />
      <div className="footerWrapper">
        <Initials className="initials" />
        <div className="breadcrumbsWrapper">
          <Breadcrumbs
            aria-label="breadcrumb"
            separator=""
            style={{ color: "black" }}
          >
            <Link
              href="https://github.com/tristanlucero"
              color="inherit"
              target="_blank"
            >
              <GitHub className={classes.icons} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tristanlucero/"
              color="inherit"
              target="_blank"
            >
              <LinkedIn className={classes.icons} />
            </Link>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}

export default Footer;
