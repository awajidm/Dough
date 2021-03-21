import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

import Grid from "@material-ui/core/Grid";

import AppSidebar from "./components/AppSidebar";
import Product from "./components/Product/Product";
import Stock from "./components/Stock/Stock";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF394F",
    },
    pink: {
      main: pink[500],
    },
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <AppSidebar />
          </Grid>
          <Grid item xs={12} md={10}>
            <Switch>
              <Route path="/stock" component={Stock} exact />
            </Switch>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  );
};

export default App;
