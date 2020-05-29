import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import DivideIcon from "@material-ui/icons/Remove";
import BoolIcon from "@material-ui/icons/Done";
import FloatIcon from "@material-ui/icons/ExposureZeroSharp";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem
              button
              key="Add"
              draggable={true}
              onDragStart={event => {
                event.dataTransfer.setData(
                  "storm-diagram-node",
                  JSON.stringify({ type: "in" })
                );
              }}
              className="tray-item"
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add" />
            </ListItem>
            <ListItem
              button
              key="Substract"
              draggable={true}
              onDragStart={event => {
                event.dataTransfer.setData(
                  "storm-diagram-node",
                  JSON.stringify({ type: "out" })
                );
              }}
              className="tray-item"
            >
              <ListItemIcon>
                <DivideIcon />
              </ListItemIcon>
              <ListItemText primary="Substract" />
            </ListItem>
            <ListItem
              button
              key="Mutliply"
              draggable={true}
              onDragStart={event => {
                event.dataTransfer.setData(
                  "storm-diagram-node",
                  JSON.stringify({ type: "in" })
                );
              }}
              className="tray-item"
            >
              <ListItemIcon>
                <ClearIcon />
              </ListItemIcon>
              <ListItemText primary="Mutliply" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              key="Float"
              draggable={true}
              onDragStart={event => {
                event.dataTransfer.setData(
                  "storm-diagram-node",
                  JSON.stringify({ type: "in" })
                );
              }}
              className="tray-item"
            >
              <ListItemIcon>
                <FloatIcon />
              </ListItemIcon>
              <ListItemText primary="Float" />
            </ListItem>
            <ListItem
              button
              key="Boolean"
              draggable={true}
              onDragStart={event => {
                event.dataTransfer.setData(
                  "storm-diagram-node",
                  JSON.stringify({ type: "in" })
                );
              }}
              className="tray-item"
            >
              <ListItemIcon>
                <BoolIcon />
              </ListItemIcon>
              <ListItemText primary="Boolean" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
