import axios from "axios";
import React, { Component } from "react";
import Input from "./Input";
import * as yup from "yup";

class Login2 extends Component {
  state = {
    account: {
      email: "",
      password: "",
      phone: "",
      date: "",
    },
    errors: [],
    sending: false,
  };

  schema = yup.object().shape({
    email: yup
      .string()
      .email("  the format of the email address is not correct ")
      .required(" email is required "),
    password: yup.string().min(4, "  password at least 4 character"),
  });
  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.account, {
        abortEarly: false,
      });
      return result;
    } catch (error) {
      console.log(error.errors);
      this.setState({ errors: error.errors });
    }
  };
  handleChange = async (e) => {
    const input = e.currentTarget;

    const account = { ...this.state.account };
    account[input.name] = input.value;
    // console.log(account);
    this.setState({ account: account });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    if (result) {
      try {
        this.setState({ sending: true });
        const response = await axios.post(
          "https://reqres.in/api/login",
          result
        );
        console.log(response);
        this.setState({ sending: false });
      } catch (error) {
        this.setState({ sending: false });
        this.setState({ errors: [" email  or password isn't correct "] });
      }
    }
  };
  render() {
    const { email, password, phone, date } = this.state.account;
    return (
      <>
        {this.state.errors.length !== 0 && (
          <div className="alert alert-danger">
            <ul>
              {this.state.errors.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        )}
        <form onSubmit={this.handleSubmit} className="w-full">
          <Input
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
          />
          <Input
            name="phone"
            value={phone}
            label="phone"
            onChange={this.handleChange}
          />
          <label htmlFor="date">birth date:</label>
          <input
            datepicker
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
            name="date"
            value={date}
            label="date"
            onChange={this.handleChange}
          />
          <br />
          <button
            disabled={this.state.sending}
            className="btn btn-primary m-auto"
          >
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Login2;
