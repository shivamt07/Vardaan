import logo from './logo.svg';
import './App.css';
 
import React, { Fragment, Suspense, lazy } from "react"
// import { MuiThemeProvider, CssBaseline } from "@material-ui/core"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../src/components/homeComponent"
// import theme from "./theme"

function App() {
  return (
    <BrowserRouter>
    {/* <MuiThemeProvider theme={theme}> */}
          <Switch>
          <Route
                  path={"/home"}
                  exact
                  component={Home}
                ></Route>
                   <Route
                  path={"/"}
                  exact
                  component={Home}
                ></Route>
          </Switch>
    {/* </MuiThemeProvider> */}
  </BrowserRouter>
  );
}

export default App;
