import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Collapse } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    background: "rgba(0,0,0,0.5)",
    margin: "20px"
  },
  media: {
    height: 240
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff"
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd"
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  }
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    shadow: 1
  });

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card
        className={classes.root}
        classes={{ root: state.raised ? classes.cardHovered : "" }}
        onMouseOver={() => setState({ raised: true, shadow: 3 })}
        onMouseOut={() => setState({ raised: false, shadow: 1 })}
        raised={state.raised}
        zdepth={state.shadow}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={place.imageUrl}
            title={place.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {place.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              {place.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Collapse>
  );
}
