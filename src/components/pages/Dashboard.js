import React from "react";
import { connect } from "react-redux";

const Dashboard = ({ name }) => <div>Hi {name}!</div>;

function mapStateToProps(state) {
  return {
    name: state.user.name
  };
}

export default connect(mapStateToProps)(Dashboard);
