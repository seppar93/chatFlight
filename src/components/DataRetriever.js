import React, { Component } from "react";
import PropTypes from "prop-types";
// import brain from "brain.js";

class DataRetriever extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      username: "",
      password: "",
      depTime: "October 19th 2018, 7:00:00 pm",
      arrTime: "October 20th 2018, 4:30:00 am",
      price: "337.02"
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
    const { error, isLoaded, depTime, arrTime, price } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Flight information: </h3>
        <table>
          <tbody>
            <tr>
              <td>Departure:</td>
              <td>{depTime}</td>
            </tr>
            <tr>
              <td>Arrival:</td>
              <td>{arrTime}</td>
            </tr>
            <tr>
              <td>price:</td>
              <td>${price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataRetriever;
