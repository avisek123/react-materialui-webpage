import React, { useEffect, useState } from "react";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
const Header = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className="root-2" id="header">
      <AppBar className="appbar" elevation={0}>
        <Toolbar className="appbarWrapper">
          <h1 className="appbar-title">
            My<span className="color-title">Island</span>
          </h1>
          <IconButton>
            <SortIcon className="icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className="container">
          <h1 className="title">
            Welcome to
            <br />
            My<span className="color-title">Island</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className="down-icon" />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};
export default Header;
