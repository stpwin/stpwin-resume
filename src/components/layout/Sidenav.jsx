import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../../variables/Variables.jsx";
import M from "materialize-css";

import { compose } from "redux";
import { connect } from "react-redux";

export class Sidenav extends Component {
  navLinks = [];

  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }
  render() {
    return (
      <ul
        className='sidenav sidenav-fixed'
        id='nav-mobile'
        ref={ref => (this.sidenav = ref)}
      >
        <li className='bold center'>
          <h3>
            <Link to='/' onClick={() => this.props.changeView("")}>
              F/Dev.
            </Link>
          </h3>
        </li>
        {NavLinks.map((prop, key) => {
          const isActive =
            this.props.viewPath === prop.component ? "active bold" : "bold";
          return (
            <li className={isActive} key={key}>
              <Link to={prop.to}>
                <i className='material-icons'>{prop.icon}</i>
                {prop.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    viewPath: state.view.viewPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeView: path => dispatch({ type: "VIEW_CHANGED", path })
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Sidenav);
