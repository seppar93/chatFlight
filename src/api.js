import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "moment";

class FlightData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cityOrig: "",
      cityDest: "",
      depDate: "",
      // emptyValue: "",
      depTime: null,
      arrTime: null,
      price: null
    };
  }

  componentDidMount() {
    const { steps } = this.props;
    const { cityOrig, cityDest, depDate, emptyValue } = steps;
    const apikey = process.env.API_KEY
    // this.setState({ cityOrig, cityDest, depDate });
    // `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=FI2A7xzrlGwGVFwwHzYvtNhGbAOxj7zD&origin=${cityOrig.value}&destination=${cityDest.value}&departure_date=2018-10-19&number_of_results=3`
    fetch(
      `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=${apikey}&origin=BOS&destination=LON&departure_date=2018-10-19&number_of_results=3`
    )
      .then(res => res.json())
      .then(
        data => {
          // console.log(cityOrig);
          // console.log(cityDest);
          // console.log(depDate);
          // console.log(emptyValue);
          // console.log(result);

          this.setState({
            isLoaded: true,
            depTime: Moment(
              data.results[0].itineraries[0].outbound.flights[0].departs_at
            ).format("MMMM Do YYYY, h:mm:ss a"),
            arrTime: Moment(
              data.results[0].itineraries[0].outbound.flights[0].arrives_at
            ).format("MMMM Do YYYY, h:mm:ss a"),
            price: data.results[0].fare.total_price

            // flightTime: Moment(
            //   result.flightStatuses[0].operationalTimes
            //     .flightPlanPlannedArrival.dateLocal
            // ).format("MMMM Do YYYY, h:mm:ss a")
          });
        },
        error => {
          // exceptions from actual bugs in components. // instead of a catch() block so that we don't swallow // Note: it's important to handle errors here
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const {
      error,
      isLoaded,
      cityOrig,
      cityDest,
      depDate,
      depTime,
      arrTime,
      price
    } = this.state;
    // console.log(cityOrig);
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
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

export default FlightData;

// let cityOrig = "BOS";
// let cityDest = "LON";
// let depDate = "2018-10-01";
// const apikey = "FI2A7xzrlGwGVFwwHzYvtNhGbAOxj7z";
// let connection; //for whether or not the route involves connection flight
// let price; //total price
// let travelTime; //total travel time
// let depTime = []; //array of all departure times on route there will only be 2 if there is a connecting flight
// let arrTime = []; //array of all arrival times on route there will only be 2 if there is a connecting flight
// let destArray = []; //array of all destinatios on route there will only be 2 if there is a connecting flight
// let departure; //departure airport code
// let destination; //dest airport code
// const URL =
//   "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=FI2A7xzrlGwGVFwwHzYvtNhGbAOxj7zD&origin=" + cityOrig + "&destination=" + cityDest + "&departure_date=" + depDate + "&number_of_results=3";

// function getData() {
//   fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.results);
//       for (i = 0; i < data.results.length; i++) {
//         arrTime = [];
//         depTime = [];
//         price = data.results[i].fare.total_price;
//         travelTime = data.results[i].itineraries[0].outbound.duration;

//         for (
//           j = 0;
//           j < data.results[i].itineraries[0].outbound.flights.length;
//           j++
//         ) {
//           depTime.push(
//             moment(
//               data.results[i].itineraries[0].outbound.flights[j].departs_at
//             ).format("MMMM Do YYYY, h:mm:ss a")
//           );
//           arrTime.push(
//             moment(
//               data.results[i].itineraries[0].outbound.flights[j].arrives_at
//             ).format("MMMM Do YYYY, h:mm:ss a")
//           );
//           destArray.push(
//             data.results[i].itineraries[0].outbound.flights[j].destination
//               .airport
//           );
//         }

//         let length = data.results[i].itineraries[0].outbound.flights.length;
//         departure =
//           data.results[i].itineraries[0].outbound.flights[0].origin.airport;
//         destination = destArray[length - 1];

//         if (data.results[i].itineraries[0].outbound.flights.length == 2) {
//           connection = "This route involves a connecting flight";
//         } else {
//           connection = "No connecting flights needed";
//         }

//         console.log("Price:" + price);
//         console.log(connection);
//         console.log("Total travel time: " + travelTime);
//         console.log("Departure Airport: " + departure);
//         console.log("Destination: " + destination);
//         if (arrTime.length == 1) {
//           console.log("Departure time: " + depTime[0]);
//           console.log("Arrival time: " + arrTime[0]);
//         } else if (arrTime.length == 2) {
//           console.log("First flight Departure time: " + depTime[0]);
//           console.log("First flight Arrival time: " + arrTime[0]);
//           console.log("Second flight Departure time: " + depTime[1]);
//           console.log("Second flight Arrival time: " + arrTime[1]);
//         } else if (arrTime.length == 3) {
//           console.log("First flight Departure time: " + depTime[0]);
//           console.log("First flight Arrival time: " + arrTime[0]);
//           console.log("Second flight Departure time: " + depTime[1]);
//           console.log("Second flight Arrival time: " + arrTime[1]);
//           console.log("Third flight Departure time: " + depTime[2]);
//           console.log("Third flight Arrival time: " + arrTime[2]);
//         } else {
//           console.log("You don't want 4 connections...cmon");
//         }
//         console.log("------------------------");
//         console.log("------------------------");
//         console.log("------------------------");
//       }
//     })
//     .catch(error => console.error(error));
// }
// getData();
