import React from "react";
import { Typography } from "@material-ui/core";
import penguins from "../../common/images/penguins.png";
import "./workHeader.css";

export default function workHeader() {
  const workHeaderText =
    "hello! ツ i'm tristan lucero - a full stack software engineer currently pursuing a bachelors degree in computer science";
  const phoneText =
    "contact info: 979-250-2645 | tristanandrewlucero@gmail.com";

  return (
    <div className="workHeaderWrapper">
      <div className="textAndImgWrapper">
        <Typography style={{ fontSize: "2.5vw", 'padding-top': '2.5vw' }}>{workHeaderText}</Typography>
        <img src={penguins} alt="Logo" className="workHeaderImg" />
      </div>
      <Typography style={{ fontSize: "1.25vw" }}>{phoneText}</Typography>
    </div>
  );
}
