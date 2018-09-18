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
    // fetch(url, )
  }
  render() {
    const { username, password } = this.state;
    return (
      <ThemeProvider theme={MainTheme}>
        <div style={{ width: "100%" }}>
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>username</td>
                <td>{username.value}</td>
              </tr>
              <tr>
                <td>password</td>
                <td>{password.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ThemeProvider>
    );
    //TODO: send data
  }
}

Registration.propTypes = {
  steps: PropTypes.object
};

Registration.defaultProps = {
  steps: undefined
};

export default Registration;
