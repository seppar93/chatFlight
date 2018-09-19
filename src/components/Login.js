import React, { Component } from "react";
import DataRetriever from "DataRetriever";
// TODO: functional componenet to return true or false

class DataRetriever extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    const { steps } = this.props;
    const { username, password } = steps;
    fetch(
      "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=FI2A7xzrlGwGVFwwHzYvtNhGbAOxj7zD&origin=BOS&destination=LON&departure_date=2018-10-19&number_of_results=3"
    )
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            isLoaded: true,
            username: username.value,
            password: password.value
          });
        },
        error => {
          // exceptions from actual bugs in components. // instead of a catch() block so that we don't swallow // Note: it's important to handle errors here
          this.setState({ isLoaded: true, error });
        }
      );
  }
}

export default Login;
