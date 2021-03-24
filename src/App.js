import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green, orange, red, purple } from "@material-ui/core/colors";

import Grid from "@material-ui/core/Grid";

import AppSidebar from "./components/Layout/AppSidebar";
import Product from "./components/Product/Product";
import Stock from "./components/Stock/Stock";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF394F",
    },
    secondary: {
      main: "#0DB5CE",
    },
    textGreen: {
      main: green[500],
    },
    textOringe: {
      main: orange[500],
    },
    textRed: {
      main: red[500],
    },
    purple: {
      main: purple[500],
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),

    h1: {
      fontSize: 32,
    },
    h2: {
      fontSize: 28,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 12,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 10,
    },
    caption: {
      fontSize: 14,
    },
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={2}>
            <AppSidebar />
          </Grid>
          <Grid item xs={10}>
            <Switch>
              <Route path="/stock" component={Stock} exact />
              <Route path="/products" component={Product} />
            </Switch>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  );
};

export default App;
