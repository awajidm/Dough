import React, { Fragment, useEffect, useState } from "react";

//redux imports
import { useDispatch, useSelector } from "react-redux";
import { getStocks } from "../../actions/stockActions";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import AppHeader from "../Layout/AppHeader";

const useStyles = makeStyles((theme) => ({
  table: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Stock = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { loading, stock, error } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  const stocks = stock.data;

  return (
    <Fragment>
      <AppHeader headerTitle="Store Stocks" />
      <div className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Store</TableCell>
              <TableCell align="center">P1</TableCell>
              <TableCell align="center">P2</TableCell>
              <TableCell align="center">P3</TableCell>
              <TableCell align="center">P4</TableCell>
              <TableCell align="center">P5</TableCell>
              <TableCell align="center">P6</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks &&
              stocks.map((stock) => (
                <TableRow key={stock.storeId}>
                  <TableCell align="left" component="th" scope="row">
                    {stock.storeName}
                  </TableCell>
                  <TableCell align="center">
                    {stock.products[0]
                      ? stock.products[0].availableQty
                      : "No product"}
                  </TableCell>
                  <TableCell align="center">
                    {stock.products[1]
                      ? stock.products[1].availableQty
                      : "No product"}
                  </TableCell>
                  <TableCell align="center">
                    {stock.products[2]
                      ? stock.products[2].availableQty
                      : "No product"}
                  </TableCell>
                  <TableCell align="center">
                    {stock.products[3]
                      ? stock.products[3].availableQty
                      : "No product"}
                  </TableCell>
                  <TableCell align="center">
                    {stock.products[4]
                      ? stock.products[4].availableQty
                      : "No product"}
                  </TableCell>
                  <TableCell align="center">
                    {stock.products[5]
                      ? stock.products[5].availableQty
                      : "No product"}
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary" size="small">
                      Move Stock
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </Fragment>
  );
};

export default Stock;
