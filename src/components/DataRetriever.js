import React, { Component } from "react";
import PropTypes from "prop-types";

class DataRetriever extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      username: "",
      password: "",
      Departure: []
    };
  }
  componentDidMount() {
    fetch(
      "mysql://b4625caa300f27:4ea1713a@us-cdbr-iron-east-01.cleardb.net/heroku_ef27c5a8dfe37e9?reconnect=true"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            username: result.username,
            password: result.password
          });
        },
        error => {
          this.setState({ isLoaded: true, error });
        }
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items);
    return (
      <div style={{ width: "100%" }}>
        <h3>Previous Search</h3>
        <table>
          <tbody>
            <tr>
              <td>Departure</td>
              {/* <td>{username}</td> */}
            </tr>
            <tr>
              <td>Arrival</td>
              {/* <td>{password}</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataRetriever;
