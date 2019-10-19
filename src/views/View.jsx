import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Profile from "./Profile";
import Technology from "./Technology";
import Experience from "./Experience";
import Education from "./Education";
import Connect from "./Connect";

export class View extends Component {
  components = {
    Profile,
    Technology,
    Experience,
    Education,
    Connect
  };

  render() {
    console.log(this.props);
    if (!this.props.match) {
      this.props.changeView("Home");
      console.log("No match");
      return <Redirect to='/' />;
    }
    const { id } = this.props.match.params;
    if (!this.components.hasOwnProperty(id)) {
      this.props.changeView("Home");
      console.log("No found");
      return <Redirect to='/' />;
    }

    this.props.changeView(id);
    const Tag = this.components[id];
    return <Tag />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeView: path => dispatch({ type: "VIEW_CHANGED", path })
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(View);
