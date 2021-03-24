import React from "react";

//material-ui components imports
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

//material-ui Icons imports
import DashboardSharpIcon from "@material-ui/icons/DashboardSharp";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ReceiptIcon from "@material-ui/icons/Receipt";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MotorcycleOutlinedIcon from "@material-ui/icons/MotorcycleOutlined";
import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  sidebarLogo: {
    padding: 20,
  },
  sideButtons: {
    width: "auto",
    padding: 20,
  },
  button: {
    width: "100%",
    textAlign: "left",
    marginBottom: 10,
    alignItems: "start",
    justifyContent: "start",
    paddingLeft: 10,
  },
  profile: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    padding: theme.spacing(2),
    alignItems: "center",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const AppSidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} className={classes.sidebarLogo}>
          <img src="/images/Logo.png" alt="Logo" width={100} />
        </Grid>
        <Divider />
        <Grid item xs={12} className={classes.sideButtons}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<DashboardSharpIcon />}
          >
            Dashboard
          </Button>
          <Button
            component="div"
            className={classes.button}
            startIcon={<ShoppingCartOutlinedIcon />}
          >
            Product
          </Button>
          <Button className={classes.button} startIcon={<ReceiptIcon />}>
            Transactions
          </Button>
          <Button
            className={classes.button}
            startIcon={<LocationOnOutlinedIcon />}
          >
            Stores
          </Button>
          <Button
            className={classes.button}
            startIcon={<MotorcycleOutlinedIcon />}
          >
            Riders
          </Button>
          <Button
            className={classes.button}
            startIcon={<TimelineOutlinedIcon />}
          >
            Analytics
          </Button>
          <Button className={classes.button} startIcon={<PeopleOutlineIcon />}>
            Customers
          </Button>
          <Button className={classes.button} startIcon={<PersonIcon />}>
            User
          </Button>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft: 20 }}>
          <Box component="span" mr={2}>
            <Badge badgeContent={6} color="primary" overlap="circle">
              <NotificationsNoneIcon />
            </Badge>
          </Box>
          Notifications
        </Grid>
        <Grid item xs={12} className={classes.profile}>
          <Avatar
            alt="Marry"
            src="/images/Logo.png"
            component="span"
            className={classes.small}
          />
          <Typography component="span">Marry</Typography>
          <ExpandMoreIcon />
        </Grid>
      </Grid>
    </div>
  );
};

export default AppSidebar;
