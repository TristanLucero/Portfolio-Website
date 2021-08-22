import React from "react";
import "./header.css";
import "@fontsource/roboto";
import { Typography, Breadcrumbs, Link, SvgIcon } from "@material-ui/core";
import { ReactComponent as Initials } from "./svg/initials.svg";

function Header() {
  return (
    <div className="headerWrapper">
      <Initials />
      <div className="breadcrumbsWrapper">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator=""
          style={{ color: "black" }}
        >
          <Link href="/" onClick={() => {}} color="inherit">
            work
          </Link>
          <Link target="_blank" href="https://docs.google.com/" color="inherit">
            resume
          </Link>
          <Link
            target="_blank"
            href="https://github.com/tristanlucero"
            color="inherit"
          >
            github
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/tristanlucero/"
            color="inherit"
          >
            linkedin
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default Header;
