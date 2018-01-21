import React, { Component } from "react";
import SignUpForm from "../forms/SignUpForm";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
import { history } from "react-router-dom";
import { Header } from "semantic-ui-react";

class SignUp extends Component {
  submit = user =>
    this.props.signup(user).then(() => this.props.history.push("/Dashboard"));
  renderEnv = () => console.log(process.env)
  render() {
    return (
      <div>
        {this.renderEnv()}
        <Header>Sign Up</Header>
        <SignUpForm submit={this.submit} />
      </div>
    );
  }
}

export default connect(null, { signup: actions.signup })(SignUp);
