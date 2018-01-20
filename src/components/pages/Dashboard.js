import React from "react";
import { connect } from "react-redux";

const Dashboard = ({ email }) => <div>Hi {email}!</div>;

function mapStateToProps(state) {
  return {
    email: state.user.email
  };
}

export default connect(mapStateToProps)(Dashboard);
