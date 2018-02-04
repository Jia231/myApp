import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { Link } from 'react-router-dom';

class TopNavigation extends Component {
  renderClass(path) {
    if (this.props.locaction) {
      if (this.props.locaction.pathname == path) {
        return "active item"
      }
      else {
        return "item"
      }
    }
    else {
      return "item"
    }

  }
  render() {
    return (
      <div className="ui secondary pointing menu">
        <div className="left menu">
          <Link className={this.renderClass('/dashboard')}
            to="/dashboard">Dashboard</Link>
          <Link className={this.renderClass('/PopularMovies')}
            to="/PopularMovies">Popular Movies</Link>
        </div>
        <div className="right menu">
          <a onClick={() => this.props.logout()} className="ui item">
            Logout
      </a>
        </div>
      </div>
    );
  }
}
export default connect(null, { logout: actions.logout })(TopNavigation);
