import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexGrow: 1,
    margin: theme.spacing(2, 4, 4, 4),
    padding: theme.spacing(2, 2),
    borderRadius: 15,
  },

  storeProducts: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    borderRadius: 25,
  },
  grow: {
    flexGrow: 1,
  },
  green: {
    color: green[500],
  },
}));

const StoreCard = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.container}>
      <Grid container spacing={10}>
        <Grid item xs={3}>
          <Badge color={classes.green} variant="dot" />
          <Typography variant="caption" color="textSecondary" ml={5}>
            {props.storeName}
          </Typography>
          <Typography variant="body2">
            Todays Avg Sale. {props.todayAvgSale}
          </Typography>
          <Typography variant="body2">
            Avg Daily Sale. {props.avgDailySale}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={10}>
            {props.children}
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="h5">{props.totalStock}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="h5">{props.dispatched}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            margin="dense"
            className={classes.btn}
            onClick={props.onbtnClick}
          >
            <Typography variant="body2">{props.buttonName}</Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StoreCard;
