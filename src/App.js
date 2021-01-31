import React from "react";
import "./styles.css";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
//import Button from "@material-ui/core/Button";
import Header from "./Components/Header";
import Place from "./Components/placeToVisit";
//import ImageCard from './Components/ImageCard';
const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundImage: `url( '/assets/bg.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
});

export default function App() {
  const classes = useStyles();

  // return <div className={classes.root}>Hook</div>;
  return (
    <div className="root">
      <CssBaseline />
      <Header />
      <Place />
      {/* <ImageCard/> */}
    </div>
  );
}
