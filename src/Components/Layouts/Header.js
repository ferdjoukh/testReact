import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Cmenu from "../Utils/Cmenu";
import UseAnimations from "react-useanimations";
import OptimindT from "../../Icons/OPTIMIND_TYPO.png";
import OptimindL from "../../Icons/OPTIMIND_LOGO.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  logo: {
    maxWidth: 160
  },
  logo2: {
    maxWidth: 70
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Cmenu />
        <img src={OptimindT} alt="logo" className={classes.logo} />
        <Typography variant="h6" className={classes.title} />
        <img src={OptimindL} alt="logo" className={classes.logo2} />
        <UseAnimations animationKey="activity" size={46} />
      </Toolbar>
    </AppBar>
  );
}
