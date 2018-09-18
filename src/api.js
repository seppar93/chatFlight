import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "moment";

class FlightData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      airportDep: null,
      airportAr: null,
      DepartureTime: null,
      arrivalTime: null,
      status: null
    };
  }
  componentDidMount() {
    fetch(
      "https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/DL/1976/arr/2018/09/17?appId=383f455e&appKey=e09a3ce6afc900e0ba14813a0921806a&utc=false"
    )
      .then(res => res.json())
      .then(
        result => {
          // console.log(
          //   result.flightStatuses[0].operationalTimes.flightPlanPlannedDeparture
          //     .dateLocal
          // );
          this.setState({
            isLoaded: true,
            items: result,
            flightTime: Moment(
              result.flightStatuses[0].operationalTimes.flightPlanPlannedArrival
                .dateLocal
            ).format("MMMM Do YYYY, h:mm:ss a")
          });
        }, // instead of a catch() block so that we don't swallow // Note: it's important to handle errors here
        // exceptions from actual bugs in components.
        error => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {/* {this.state.items.map(item => (
            <li key={item}>
              {item.name} {item.price}
            </li>
          ))} */}
          your flight is arriving at: {this.state.flightTime}
        </ul>
      );
    }
  }
}

export default FlightData;
