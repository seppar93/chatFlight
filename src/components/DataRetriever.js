import React, { Component } from "react";
import PropTypes from "prop-types";

class DataRetriever extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      username: null,
      password: null,
      items: []
    };
  }
  componentDidMount() {
    fetch(
      "http://aviation-edge.com/v2/public/flights?key=161093-9c54a3&flightIata=FZ337"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            username: result.username,
            password: result.password,
            items: result.items
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
              <td>{Departure.value}</td>
            </tr>
            <tr>
              <td>Arrival</td>
              <td>{Arrival.value}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{Status.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataRetriever;
