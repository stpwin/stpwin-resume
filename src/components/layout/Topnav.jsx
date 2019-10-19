import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

export class Topnav extends Component {
  render() {
    return (
      <header>
        <nav className='top-nav'>
          <div className='nav-wrapper white compact'>
            <div className='row'>
              <div className='col s12'>
                <NavLink
                  to='#!'
                  data-target='nav-mobile'
                  className='sidenav-trigger blue-text'
                >
                  <i className='material-icons'>menu</i>
                </NavLink>
                {/* <h1 class='header'>F/Dev.</h1> */}
                <div className='brand-logo teal-text text-darken-3'>
                  {this.props.viewPath}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state.view.viewPath);
  return {
    viewPath: state.view.viewPath
  };
};

export default compose(connect(mapStateToProps))(Topnav);
