import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";

import Topnav from "./components/layout/Topnav";
import Sidenav from "./components/layout/Sidenav";
import View from "./views/View";
import NoMatch from "./components/layout/NoMatch";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Topnav />
          <Sidenav />
          <main>
            <div className='container'>
              <div className='row'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/view/:id' component={View} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
