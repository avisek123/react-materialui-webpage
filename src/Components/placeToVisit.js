import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/places";
import useWindowPosition from "../Hook/useWindowPosition";
import Divider from "@material-ui/core/Divider";
import { BorderVertical } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  },
  divider: {
    color: "red",
    BorderVertical: "1px solid"
  }
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[1]} checked={checked} />
      <Divider className={classes.divider} orientation="vertical" flexItem />
      <ImageCard place={places[0]} checked={checked} />
    </div>
  );
}
