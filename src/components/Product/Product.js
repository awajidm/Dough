import React, { Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

import ProductCard from "./ProductCard";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

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

const products = [
  {
    id: "1",
    name: "Caramel",
    subtitle: `Dunkin's`,
    price: 45,
    image: "/images/P6.png",
    user: "creator",
  },
  {
    id: "2",
    name: "Floating Daunt ",
    subtitle: `Dunkin's`,
    price: 45,
    image: "/images/P2.png",
    user: "creator",
  },
  {
    id: "3",
    name: "Choco",
    subtitle: `Dunkin's`,
    price: 45,
    image: "/images/P3.png",
    user: "creator",
  },
  {
    id: "4",
    name: "Vanilla",
    subtitle: `Dunkin's`,
    price: 45,
    image: "/images/P4.png",
    user: true,
  },
  {
    id: "5",
    name: "Red",
    subtitle: `Dunkin's`,
    image: "/images/P2.png",
    price: 45,
    user: "user",
  },
  {
    id: "6",
    name: "Pink Donut",
    subtitle: `Dunkin's`,
    price: 45,
    image: "/images/P5.png",
    user: "user",
  },
];

const Product = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar className={classes.root} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.title}>
            Product
          </Typography>
          <Button variant="contained" color="primary">
            Add Product
          </Button>
        </Toolbar>
      </AppBar>

      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="start">
            {products &&
              products.map((product) => (
                <Grid key={product.id} item>
                  <ProductCard
                    name={product.name}
                    subtitle={product.subtitle}
                    price={product.price}
                    image={product.image}
                    user={product.user}
                  />
                </Grid>
              ))}
            <Card className={classes.AddProduct} raised>
              <CardContent className={classes.AddProductContent}>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  Add Product
                </Typography>
                <Typography gutterBottom align="center">
                  <AddOutlinedIcon style={{ fontSize: 40 }} />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Product;
