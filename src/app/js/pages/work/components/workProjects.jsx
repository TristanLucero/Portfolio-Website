import React from "react";
import {
  Typography,
  Divider,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import "./workProjects.css";
import blackImage from "../../common/images/black-image.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  projectsText: {
    fontSize: "2vw",
  },
  divider: {
    "background-color": "black",
  },
  card: {
    "margin-left": "2vw",
    "margin-right": "2vw",
    maxWidth: 400,
    maxHeight: "25vw",
  },
  cardText: {
    fontSize: "1vw",
    variant: "body2",
    color: "textSecondary",
  },
});

export default function workProjects() {
  const classes = useStyles();

  return (
    <div className="projectsWrapper">
      <Typography className={classes.projectsText}>projects</Typography>
      <Divider className={classes.divider} />
      <div className="cardsWrapper">
        <Card className={classes.card}>
          <CardMedia style={{ height: "15vw" }} image={blackImage} />
          <CardContent>
            <Typography className={classes.cardText}>
              Project 1 - this project is a simple project for a portfolio
              website. This was made with React using Javascript, HTML, and CSS.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia style={{ height: "15vw" }} image={blackImage} />
          <CardContent>
            <Typography className={classes.cardText}>
              Project 2 - this project is a simple project for a portfolio
              website. This was made with React using Javascript, HTML, and CSS.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia style={{ height: "15vw" }} image={blackImage} />
          <CardContent>
            <Typography className={classes.cardText}>
              Project 3 - this project is a simple project for a portfolio
              website. This was made with React using Javascript, HTML, and CSS.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
