import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

const TopNavigation = ({ logout }) => (
  <div className="ui secondary pointing menu">
    <div className="right menu">
      <a onClick={() => logout()} className="ui item">
        Logout
      </a>
    </div>
  </div>
);

export default connect(null, { logout: actions.logout })(TopNavigation);
