// var airports = require("airport-codes");
// const API = "161093-9c54a3";
// //const APIKey = process.env.FLIGHT_API_KEY
// let iata = "FZ337";
// let icao;
// let flightnum;
// let queryURL;
// let res;
// let departure;
// let arrival;
// let status;
// const IATAURL =
//   "http://aviation-edge.com/v2/public/flights?key=" +
//   API +
//   "&flightIata=" +
//   iata;
// const ICAOURL =
//   "http://aviation-edge.com/v2/public/flights?key=" +
//   API +
//   "&flightIcao=" +
//   icao;
// const NUMURL =
//   "http://aviation-edge.com/v2/public/flights?key=" +
//   API +
//   "&flightNum=" +
//   flightnum;
// export function getdata() {
//   fetch(IATAURL)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       departure = data[0].departure.iataCode;
//       arrival = data[0].arrival.iataCode;
//       status = data[0].status;
//       return [departure, arrival, status];
//     })
//     .then(function(info) {
//       departure = airports.findWhere({ iata: info[0] }).get("name");
//       arrival = airports.findWhere({ iata: info[1] }).get("name");
//       status = info[2];
//       return [departure, arrival, status];
//     });
// }

import React, { Component } from "react";
import PropTypes from "prop-types";

class FlightData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      flightTime: null
    };
  }
  componentDidMount() {
    fetch(
      "https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/DL/1976/arr/2018/09/17?appId=383f455e&appKey=e09a3ce6afc900e0ba14813a0921806a&utc=false"
    )
      .then(res => res.json())
      .then(
        result => {
          console.log(
            result.flightStatuses[0].operationalTimes.estimatedGateArrival
              .dateLocal
          );
          this.setState({
            isLoaded: true,
            items: result,
            flightTime:
              result.flightStatuses[0].operationalTimes.estimatedGateArrival
                .dateLocal
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
          {this.state.flightTime}
        </ul>
      );
    }
  }
}

export default FlightData;

// import PropTypes from "prop-types";

// class DBPedia extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: true,
//       result: "",
//       trigger: false
//     };

//     this.triggetNext = this.triggetNext.bind(this);
//   }

//   componentWillMount() {
//     const self = this;
//     const { steps } = this.props;
//     const search = steps.search.value;
//     const endpoint = encodeURI("https://dbpedia.org");
//     const query = encodeURI(`
//       select * where {
//       ?x rdfs:label "${search}"@en .
//       ?x rdfs:comment ?comment .
//       FILTER (lang(?comment) = 'en')
//       } LIMIT 100
//     `);

//     const queryUrl = `https://dbpedia.org/sparql/?default-graph-uri=${endpoint}&query=${query}&format=json`;

//     const xhr = new XMLHttpRequest();

//     xhr.addEventListener("readystatechange", readyStateChange);

//     function readyStateChange() {
//       if (this.readyState === 4) {
//         const data = JSON.parse(this.responseText);
//         const bindings = data.results.bindings;
//         if (bindings && bindings.length > 0) {
//           self.setState({ loading: false, result: bindings[0].comment.value });
//         } else {
//           self.setState({ loading: false, result: "Not found." });
//         }
//       }
//     }

//     xhr.open("GET", queryUrl);
//     xhr.send();
//   }

//   triggetNext() {
//     this.setState({ trigger: true }, () => {
//       this.props.triggerNextStep();
//     });
//   }

//   render() {
//     const { trigger, loading, result } = this.state;

//     return (
//       <div className="dbpedia">
//         {loading ? <Loading /> : result}
//         {!loading && (
//           <div
//             style={{
//               textAlign: "center",
//               marginTop: 20
//             }}
//           >
//             {!trigger && (
//               <button onClick={() => this.triggetNext()}>Search Again</button>
//             )}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// DBPedia.propTypes = {
//   steps: PropTypes.object,
//   triggerNextStep: PropTypes.func
// };

// DBPedia.defaultProps = {
//   steps: undefined,
//   triggerNextStep: undefined
// };

// export default DBPedia;
