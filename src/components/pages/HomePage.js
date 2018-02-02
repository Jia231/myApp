import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class HomePage extends Component {
  render() {
    const { isAuthenticated, logout } = this.props;
    return (
      <Container>
        <Header as="h1">Welcome to your Movie Store!</Header>
        {isAuthenticated ? (
          <div>
            <Link to="/Dashboard">Go to your dashboard</Link>
          </div>
        ) : (
            <div>
              <Link to="/LoginPage">Login</Link> or
            <Link to="/SignUp">Sign Up</Link>
            </div>
          )}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
