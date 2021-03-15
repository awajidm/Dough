import React from "react";
import "./App.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import AppSidebar from "./components/AppSidebar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF394F",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppSidebar />
    </ThemeProvider>
  );
};

export default App;
