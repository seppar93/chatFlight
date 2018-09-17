import React, { Component } from "react";
import PropTypes from "prop-types";

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
  }
  render() {
    const { username, password } = this.state;
    return (
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
      //TODO: send data
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
