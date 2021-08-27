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
import portfolioImg from '../../common/images/portfolio.png';
import sortingImg from '../../common/images/sorting.jpg';
import bangImg from '../../common/images/bang.jpg';
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
    height: "10vw",
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
                  href="https://github.com/TristanLucero/Portfolio-Website"
                  color="inherit"
                  target="_blank"
                >
                  <GitHub className={classes.icons} />
                </Link>
              </IconButton>
            }
            title="Project 1"
          />
          <CardMedia className={classes.cardMedia} image={portfolioImg} />
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
                  href="https://github.com/TristanLucero/sorting-algorithm-visualizer"
                  color="inherit"
                  target="_blank"
                >
                  <GitHub className={classes.icons} />
                </Link>
              </IconButton>
            }
            title="Project 2"
          />
          <CardMedia className={classes.cardMedia} image={sortingImg} />
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
                  href="https://github.com/TristanLucero/BANG-Card-Game-Clone"
                  color="inherit"
                  target="_blank"
                >
                  <GitHub className={classes.icons} />
                </Link>
              </IconButton>
            }
            title="Project 3"
          />
          <CardMedia className={classes.cardMedia} image={bangImg} />
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
