import React, { Fragment, useEffect, useState } from "react";

//redux imports
import { useDispatch, useSelector } from "react-redux";
import { getStocks } from "../../actions/stockActions";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CloseIcon from "@material-ui/icons/Close";

import AppHeader from "../Layout/AppHeader";
import MoveStock from "./MoveStock";
import StoreCard from "./StoreCard";

const useStyles = makeStyles((theme) => ({
  table: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  heading: {
    display: "flex",
    flexGrow: 1,
    margin: theme.spacing(4, 4, 0, 4),
    padding: theme.spacing(0, 2, 0, 2),
    borderRadius: 25,
  },
  grow: {
    flexGrow: 1,
  },
  formControl: {
    minWidth: 120,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 100,
  },
  addStockForm: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    borderRadius: 25,
    marginTop: theme.spacing(4),
  },
}));

const styles = (theme) => ({
  root: {
    width: "auto",
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const Stock = () => {
  const [sort, setSort] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleAddStock = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const classes = useStyles();

  const dispatch = useDispatch();

  const { loading, stock, error } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  const stocks = stock.data;

  return (
    <Fragment>
      <Grid container style={{ margin: 5 }}>
        <Grid item xs={12} container>
          <Grid item xs={3}>
            <Typography variant="h5">Welcome back to stocks!</Typography>
          </Grid>
          <Grid item xs={7}>
            <FormControl>
              <Input
                size="small"
                margin="dense"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.formControl}>
              <Select
                displayEmpty
                labelId="sort-by"
                value={sort}
                onChange={handleChange}
              >
                <MenuItem value="" disabled>
                  Sort by
                </MenuItem>
                <MenuItem value={1}>by id</MenuItem>
                <MenuItem value={2}>by name</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item container className={classes.heading}>
            <Grid item xs={3}>
              <Typography variant="h5">Bakery</Typography>
            </Grid>
            <Grid item container xs={5}>
              <Grid item xs={2}>
                <Typography variant="h5">P1</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5">P2</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5">P3</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5">P4</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5">P5</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5">P6</Typography>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h5">Stock</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h5">Qunatity</Typography>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          {stocks &&
            stocks
              .filter((stock) => stock.storeType === 1)
              .map((stock) => (
                <Fragment>
                  <StoreCard
                    storeName={stock.storeName}
                    todayAvgSale={stock.todayAvgSale}
                    avgDailySale={stock.dailyAvgSale}
                    totalStock={stock.totalStock}
                    dispatched={stock.dispatchedQty}
                    buttonName="Add Stock"
                    onbtnClick={handleAddStock}
                  >
                    {stock.products &&
                      stock.products.map((product) => (
                        <Grid item xs={2} key={product.code}>
                          <Typography
                            color={
                              product.availableQty / product.se > 200
                                ? "error"
                                : "textScondary"
                            }
                          >
                            {product.availableQty}
                          </Typography>
                          <Typography variant="caption">
                            {product.requestedQty}
                          </Typography>
                        </Grid>
                      ))}
                  </StoreCard>
                </Fragment>
              ))}
        </Grid>
        <Grid item container className={classes.heading}>
          <Grid item xs={12}>
            <Typography variant="h5">Store</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {stocks &&
            stocks
              .filter((stock) => stock.storeType === 2)
              .map((stock) => (
                <StoreCard
                  storeName={stock.storeName}
                  todayAvgSale={stock.todayAvgSale}
                  avgDailySale={stock.dailyAvgSale}
                  totalStock={stock.totalStock}
                  dispatched={stock.dispatchedQty}
                  buttonName={stock.dispatchedQty ? "Edit Stock" : "Move Stock"}
                >
                  {stock.products &&
                    stock.products.map((product) => (
                      <Grid item xs={2} key={product.code}>
                        <Typography
                          color={
                            product.availableQty > 200
                              ? "error"
                              : "textScondary"
                          }
                        >
                          {product.availableQty}
                        </Typography>
                        <Typography variant="caption">
                          {product.requestedQty}
                        </Typography>
                      </Grid>
                    ))}
                </StoreCard>
              ))}
        </Grid>
      </Grid>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Stock
        </DialogTitle>
        <DialogContent dividers>Add Stock to your bakery</DialogContent>
        <DialogContent>
          <FormControl className={classes.formControl}>
            <Select
              displayEmpty
              labelId="sort-by"
              value={sort}
              onChange={handleChange}
            >
              <MenuItem value="" disabled>
                Bakeries
              </MenuItem>
              <MenuItem value={1}>bakery 1</MenuItem>
              <MenuItem value={2}>bakery 2</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.addStockForm}>
            <TextField
              label="P1"
              className={classes.textField}
              margin="dense"
            />
            <TextField
              label="P2"
              className={classes.textField}
              margin="dense"
            />
            <TextField
              label="P3"
              className={classes.textField}
              margin="dense"
            />
          </div>
          <div className={classes.addStockForm}>
            <TextField
              label="P4"
              className={classes.textField}
              margin="dense"
            />
            <TextField
              label="P5"
              className={classes.textField}
              margin="dense"
            />
            <TextField
              label="P6"
              className={classes.textField}
              margin="dense"
            />
          </div>
          <Button
            fu
            variant="contained"
            color="secondary"
            size="small"
            margin="dense"
            className={classes.btn}
          >
            <Typography variant="body2">Add Stock</Typography>
          </Button>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default Stock;

// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// <div className={classes.table}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell align="left">Store</TableCell>
//               <TableCell align="center">P1</TableCell>
//               <TableCell align="center">P2</TableCell>
//               <TableCell align="center">P3</TableCell>
//               <TableCell align="center">P4</TableCell>
//               <TableCell align="center">P5</TableCell>
//               <TableCell align="center">P6</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {stocks &&
//               stocks.map((stock) => (
//                 <TableRow key={stock.storeId}>
//                   <TableCell align="left" component="th" scope="row">
//                     {stock.storeName}
//                   </TableCell>
//                   <TableCell align="center">
//                     {stock.products[0]
//                       ? stock.products[0].availableQty
//                       : "No product"}
//                   </TableCell>
//                   <TableCell align="center">
//                     {stock.products[1]
//                       ? stock.products[1].availableQty
//                       : "No product"}
//                   </TableCell>
//                   <TableCell align="center">
//                     {stock.products[2]
//                       ? stock.products[2].availableQty
//                       : "No product"}
//                   </TableCell>
//                   <TableCell align="center">
//                     {stock.products[3]
//                       ? stock.products[3].availableQty
//                       : "No product"}
//                   </TableCell>
//                   <TableCell align="center">
//                     {stock.products[4]
//                       ? stock.products[4].availableQty
//                       : "No product"}
//                   </TableCell>
//                   <TableCell align="center">
//                     {stock.products[5]
//                       ? stock.products[5].availableQty
//                       : "No product"}
//                   </TableCell>
//                   <TableCell align="center">
//                     <MoveStock />
//                   </TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </div>

// <Grid item xs={12}>
//           <Grid container className={classes.heading}>
//             <Grid item xs={2} clssName={classes.storeName}>
//               <Typography variant="h5">Bakery</Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <Grid container spacing={2}>
//                 <Grid item xs={2}>
//                   <Typography>P1</Typography>
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Typography>P2</Typography>
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Typography>P3</Typography>
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Typography>P4</Typography>
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Typography>P5</Typography>
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Typography>P6</Typography>
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Grid item xs={1}>
//               <Typography variant="h5">Stock</Typography>
//             </Grid>
//             <Grid item xs={1}>
//               <Typography variant="h5">Qunatity</Typography>
//             </Grid>
//             <Grid item xs={2}></Grid>
//           </Grid>
//           <Paper elevation={3} className={classes.container}>
//             <Grid container spacing={10}>
//               <Grid item xs={2} clssName={classes.storeName}>
//                 <Typography variant="body2">Stock</Typography>
//               </Grid>
//               <Grid item xs={6}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={2}>
//                     <Typography>0</Typography>
//                     <Typography variant="caption">0</Typography>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <Typography>0</Typography>
//                     <Typography variant="caption">0</Typography>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <Typography>0</Typography>
//                     <Typography variant="caption">0</Typography>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <Typography>0</Typography>
//                     <Typography variant="caption">0</Typography>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <Typography>0</Typography>
//                     <Typography variant="caption">0</Typography>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <Typography>0</Typography>
//                     <Typography variant="caption">0</Typography>
//                   </Grid>
//                 </Grid>
//               </Grid>
//               <Grid item xs={1}>
//                 <Typography variant="h5">0</Typography>
//               </Grid>
//               <Grid item xs={1}>
//                 <Typography variant="h5">0</Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   size="small"
//                   margin="dense"
//                 >
//                   Add Product
//                 </Button>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="body1">Store</Typography>
//         </Grid>
//         <Grid item xs={12}>
//           {stocks &&
//             stocks.map((stock) => (
//               <Paper elevation={3} className={classes.container}>
//                 <Grid container spacing={10}>
//                   <Grid item xs={2} clssName={classes.storeName}>
//                     <Badge
//                       anchorOrigin={{
//                         vertical: "top",
//                         horizontal: "left",
//                       }}
//                       color="primary"
//                       variant="dot"
//                     >
//                       {stock.storeName}
//                     </Badge>
//                     <Typography variant="body2">
//                       Todays Avg Sale. {stock.todayAvgSale}
//                     </Typography>
//                     <Typography variant="body2">
//                       Avg Daily Sale. {stock.dailyAvgSale}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Grid container>
//                       {stock.products &&
//                         stock.products.map((product) => (
//                           <Grid item xs={2} key={product.code}>
//                             <Typography
//                               color={
//                                 product.availableQty > 200
//                                   ? "error"
//                                   : "textScondary"
//                               }
//                             >
//                               {product.availableQty}
//                             </Typography>
//                             <Typography variant="caption">
//                               {product.requestedQty}
//                             </Typography>
//                           </Grid>
//                         ))}
//                     </Grid>
//                   </Grid>
//                   <Grid item xs={1}>
//                     <Typography variant="h5">{stock.totalStock}</Typography>
//                   </Grid>
//                   <Grid item xs={1}>
//                     <Typography variant="h5">{stock.dispatchedQty}</Typography>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       size="small"
//                       margin="dense"
//                     >
//                       {stock.dispatchedQty ? "Edit Stock" : "Move Stock"}
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Paper>
//             ))}
//         </Grid>
