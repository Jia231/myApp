import React from "react";
import { Button, Form } from "semantic-ui-react";
import validator from "validator";
import PropTypes from "prop-types";
import _ from "lodash";
import InlineErrors from "../messages/InlineErrors";

class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  onSubmit = () => {
    const errors = this.validate(this.state.data);
    if (_.isEmpty(errors)) {
      this.props
        .submit(this.state.data)
        .catch(err => {
          console.log(err)
          this.setState({ errors: err.response.data.errors })
        });
    } else {
      this.setState({
        ...this.state.data,
        errors
      });
    }
  };

  validate = data => {
    const errors = {};
    if (!validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    // console.log(errors);
    return errors;
  };
  render() {
    const { data, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        {errors.global && (
          <div className="ui negative message">
            <div className="header">{errors.global}</div>
          </div>
        )}
        {errors.email && <InlineErrors error={errors.email} />}
        <Form.Field error={!!errors.email}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={this.onChange}
            placeholder="email@email.com"
          />
        </Form.Field>
        {errors.password && <InlineErrors error={errors.password} />}
        <Form.Field error={!!errors.password}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={this.onChange}
            placeholder="Enter your password"
          />
        </Form.Field>
        <Button primary>Log In</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
