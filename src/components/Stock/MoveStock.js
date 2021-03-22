import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import CloseIcon from "@material-ui/icons/Close";

import MoveStockStepper from "./MoveStockStepper";

const useStyles = makeStyles((theme) => ({
  fullList: {
    width: "auto",
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
  },
}));

const MoveStock = () => {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <Fragment>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            setOpenDrawer(true);
          }}
        >
          Move Stock
        </Button>
        <Drawer className={classes.fullList} anchor="top" open={openDrawer}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <IconButton color="inherit">
                    <ArrowBackIosOutlinedIcon />
                  </IconButton>
                </Grid>
                <Grid item className={classes.title}>
                  <Typography variant="h6">Move Stock</Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    color="inherit"
                    onClick={() => {
                      setOpenDrawer(false);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <MoveStockStepper />
            </Grid>
          </Grid>
        </Drawer>
      </Fragment>
    </div>
  );
};

export default MoveStock;
