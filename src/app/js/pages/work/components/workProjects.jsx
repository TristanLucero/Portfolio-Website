import React from "react";
import {
  Typography,
  Divider,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  IconButton,
  Link,
} from "@material-ui/core";
import "./workProjects.css";
import blackImage from "../../common/images/black-image.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles({
  projectsText: {
    fontSize: "2vw",
  },
  divider: {
    "background-color": "black",
  },
  card: {
    margin: "2vw",
  },
  cardText: {
    fontSize: "1.2vw",
    variant: "body2",
    color: "textSecondary",
  },
  cardMedia: {
    height: "15vw",
  },
  cardHeaderText: {
    fontSize: "2vw",
  },
  icons: {
    fontSize: "2vw",
  },
});

export default function workProjects() {
  const classes = useStyles();

  return (
    <div className="projectsWrapper">
      <Typography className={classes.projectsText}>projects</Typography>
      <Divider className={classes.divider} />
      <div className="cardsWrapper">
        <Card className={classes.card} raised>
          <CardHeader
            titleTypographyProps={{ className: classes.cardHeaderText }}
            action={
              <IconButton aria-label="settings">
                <Link
                  href="https://github.com/tristanlucero"
                  color="inherit"
                  target="_blank"
                >
                  <GitHub className={classes.icons} />
                </Link>
              </IconButton>
            }
            title="Project 1"
          />
          <CardMedia className={classes.cardMedia} image={blackImage} />
          <CardContent>
            <Typography className={classes.cardText}>
              This project is a simple project for a portfolio website. This was
              made with React using Javascript, HTML, and CSS.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card} raised>
          <CardHeader
            titleTypographyProps={{ className: classes.cardHeaderText }}
            action={
              <IconButton aria-label="settings">
                <Link
                  href="https://github.com/tristanlucero"
                  color="inherit"
                  target="_blank"
                >
                  <GitHub className={classes.icons} />
                </Link>
              </IconButton>
            }
            title="Project 2"
          />
          <CardMedia className={classes.cardMedia} image={blackImage} />
          <CardContent>
            <Typography className={classes.cardText}>
              This project is a simple project for a portfolio website. This was
              made with React using Javascript, HTML, and CSS.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card} raised>
          <CardHeader
            titleTypographyProps={{ className: classes.cardHeaderText }}
            action={
              <IconButton aria-label="settings">
                <Link
                  href="https://github.com/tristanlucero"
                  color="inherit"
                  target="_blank"
                >
                  <GitHub className={classes.icons} />
                </Link>
              </IconButton>
            }
            title="Project 3"
          />
          <CardMedia className={classes.cardMedia} image={blackImage} />
          <CardContent>
            <Typography className={classes.cardText}>
              This project is a simple project for a portfolio website. This was
              made with React using Javascript, HTML, and CSS.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
