import React, { Component } from "react";
import PropTypes from "prop-types";
import MainTheme from "./Theme";
import { ThemeProvider } from "styled-components";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { username, password } = steps;

    this.setState({ username, password });

    (async () => {
      const rawResponse = await fetch(
        "mysql://b4625caa300f27:4ea1713a@us-cdbr-iron-east-01.cleardb.net/heroku_ef27c5a8dfe37e9?reconnect=true",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ a: 1, b: "Textual content" })
        }
      );
      const content = await rawResponse.json();

      console.log(content);
    })();
  }
  render() {
    const { username, password } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Username:</td>
              <td>{username.value}</td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>{password.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Registration.propTypes = {
  steps: PropTypes.object
};

Registration.defaultProps = {
  steps: undefined
};

export default Registration;
