import React, { Component } from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";

export class Nav extends Component {
  render() {
    return (
      <div>
        <Topnav />
        <Sidenav />
      </div>
    );
  }
}

export default Nav;
