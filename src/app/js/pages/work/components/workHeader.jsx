import React from "react";
import { Typography } from "@material-ui/core";
import penguins from "../../common/images/penguins.png";
import "./workHeader.css";

export default function workHeader() {
  const workHeaderText =
    "hello! ツ i'm tristan lucero, a full-stack software engineer with a bachelors degree in computer science";

  return (
    <div className="workHeaderWrapper">
      <Typography className="workHeaderText">{workHeaderText}</Typography>
      <img src={penguins} alt="Logo" className="workHeaderImg" />
    </div>
  );
}
