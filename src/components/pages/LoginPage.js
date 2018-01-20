import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { history, Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import { Header, Container } from "semantic-ui-react";
import { login } from "../../actions/index";

class LoginPage extends Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/Dashboard"));

  render() {
    return (
      <div>
        <Header>Login page</Header>
        <LoginForm submit={this.submit} />
        <Link to="/ForgotPassword">Forgot Password</Link>
      </div>
    );
  }
}
LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
