import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  toolbar: {
    backgroundColor: "white",
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  AddProduct: {
    display: "flex",
    width: 230,
    borderRadius: 25,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  AddProductContent: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
}));

const AppHeader = ({ headerTitle, ButtonClick, buttonTitle }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" color="primary" className={classes.title}>
          {headerTitle}
        </Typography>
        {buttonTitle ? (
          <Button variant="contained" color="primary" onCLick={ButtonClick}>
            {buttonTitle}
          </Button>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
