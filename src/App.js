import logo from './logo.svg';
import './App.css';
 
import React, { Fragment, Suspense, lazy } from "react"
// import { MuiThemeProvider, CssBaseline } from "@material-ui/core"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../src/components/home"
import Headers from "../src/components/headers"
// import theme from "./theme"

function App() {
  return (
    <BrowserRouter>
    {/* <MuiThemeProvider theme={theme}> */}
    <div>
      <Headers/>
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
          </div>
    {/* </MuiThemeProvider> */}
  </BrowserRouter>
  );
}

export default App;
