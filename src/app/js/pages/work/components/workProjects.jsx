import React from "react";
import {
  Typography,
  Divider,
  Card,
  CardMedia,
  CardContent,
  CardActions,
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
    "margin-left": "1vw",
    "margin-right": "1vw",
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
          <CardMedia
            style={{ height: 200, paddingTop: "56.25%" }}
            image={blackImage}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Project 1
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            style={{ height: 200, paddingTop: "56.25%" }}
            image={blackImage}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Project 2
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            style={{ height: 200, paddingTop: "56.25%" }}
            image={blackImage}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Project 3
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
