import React from "react";
import { Button, Form } from "semantic-ui-react";
import validator from "validator";
import PropTypes from "prop-types";
import _ from "lodash";
import InlineErrors from "../messages/InlineErrors";
import InfiniteCalendar from 'react-infinite-calendar';

class SignUpForm extends React.Component {
  state = {
    data: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      birthDate: false,
      gender: ""
    },
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onChangeDate = date => {
    this.setState({ data: { ...this.state.data, birthDate: date } })
  }
  onSubmit = () => {
    const errors = this.validate(this.state.data);
    if (_.isEmpty(errors)) {
      this.props
        .submit(this.state.data)
        .catch(err => {
          if (!!err.response.data.errors) this.setState({ errors: err.response.data.errors })
          else this.setState({ errors: { global: "Uppps something went wrong!!" } })
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
    if (!data.firstname) errors.firstname = "Can't be blank";
    if (!data.birthDate) errors.birthDate = "Please select a valid date";
    if (!data.lastname) errors.lastname = "Can't be blank";
    if (!validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    if (!data.gender) errors.gender = "Please select a gender";
    return errors;
  };
  render() {
    const { data, errors } = this.state;
    const today = new Date();
    const max = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1)
    return (
      <Form className="ui form" onSubmit={this.onSubmit}>
        {errors.global && (
          <div className="ui negative message">
            <div className="header">{errors.global}</div>
          </div>
        )}
        <div className="two fields">
          <div className="field">
            {errors.firstname && <InlineErrors error={errors.firstname} />}
            <Form.Field error={!!errors.firstname}>
              <label>Firstname</label>
              <input
                type="text"
                name="firstname"
                value={data.firstname}
                onChange={this.onChange}
              />
            </Form.Field>
          </div>
          <div className="field">
            {errors.lastname && <InlineErrors error={errors.lastname} />}
            <Form.Field error={!!errors.lastname}>
              <label>Lastname</label>
              <input
                type="text"
                name="lastname"
                value={data.lastname}
                onChange={this.onChange}
              />
            </Form.Field>
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            {errors.email && <InlineErrors error={errors.email} />}
            <Form.Field error={!!errors.email}>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={this.onChange}
                  placeholder="email@email.com"
                />
              </div>
            </Form.Field>
          </div>
          <div className="field">
            {errors.password && <InlineErrors error={errors.password} />}
            <Form.Field error={!!errors.password}>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={this.onChange}
                  placeholder="Enter your password"
                />
              </div>
            </Form.Field>
          </div>
        </div>
        <div className="four fields">
          <div className="field">
            <Form.Field error={!!errors.gender} >
              <div className="field">
                {errors.gender && <InlineErrors error={errors.gender} />}
                <label>Gender</label>
                <select name="gender" onChange={this.onChange} className='ui fluid dropdown'>
                  <option value="">Select your gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>
            </Form.Field>
          </div>
        </div>
        <div className="field">
          {errors.birthDate && <InlineErrors error={errors.birthDate} />}
          <label>Birth Date</label>
          <InfiniteCalendar
            onSelect={(date) => this.onChangeDate(date)}
            width={300}
            height={200}
            maxDate={max}
          />
        </div>
        <Button primary>Log In</Button>
      </Form>
    );
  }
}

SignUpForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignUpForm;
