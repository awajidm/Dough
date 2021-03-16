import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import VisibilityIcon from "@material-ui/icons/Visibility";
import CreateSharpIcon from "@material-ui/icons/CreateSharp";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 230,
    borderRadius: 25,
    margin: 20,
  },
  header: {
    padding: 0,
  },
  paper: {
    borderRadius: "0px 0px 0px 20px",
    margin: 7,
    padding: "10px 25px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
}));

const ProductCard = ({ name, subtitle, price, image, user }) => {
  const classes = useStyles();

  const ProductCreatorIcons = () => {
    if (user === "creator") {
      return (
        <>
          <IconButton aria-label="View">
            <VisibilityIcon />
          </IconButton>
          <IconButton aria-label="Edit">
            <CreateSharpIcon />
          </IconButton>
          <IconButton aria-label="Delete">
            <DeleteForeverOutlinedIcon />
          </IconButton>
        </>
      );
    } else if (user === "user") {
      return (
        <IconButton aria-label="View">
          <VisibilityIcon />
        </IconButton>
      );
    } else {
      return <IconButton aria-label="View"></IconButton>;
    }
  };

  return (
    <Card className={classes.root} raised>
      <CardHeader
        className={classes.header}
        action={
          <Paper className={classes.paper}>
            <Typography>${price}</Typography>
          </Paper>
        }
      />

      <CardContent className={classes.content}>
        <img height="120" src={image} title="Product 1" />
      </CardContent>

      <CardContent className={classes.content}>
        <Typography variant="h5" component="p">
          {name}
        </Typography>
      </CardContent>

      <CardContent className={classes.content}>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          {subtitle}
        </Typography>
      </CardContent>

      <CardActions className={classes.content}>
        {user ? <ProductCreatorIcons /> : null}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
