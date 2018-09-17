var airports = require("airport-codes");
const API = "161093-9c54a3";
//const APIKey = process.env.FLIGHT_API_KEY
let iata = "FZ337";
let icao;
let flightnum;
let queryURL;
let res;
let departure;
let arrival;
let status;
const IATAURL =
  "http://aviation-edge.com/v2/public/flights?key=" +
  API +
  "&flightIata=" +
  iata;
const ICAOURL =
  "http://aviation-edge.com/v2/public/flights?key=" +
  API +
  "&flightIcao=" +
  icao;
const NUMURL =
  "http://aviation-edge.com/v2/public/flights?key=" +
  API +
  "&flightNum=" +
  flightnum;
export function getdata() {
  fetch(IATAURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      departure = data[0].departure.iataCode;
      arrival = data[0].arrival.iataCode;
      status = data[0].status;
      return [departure, arrival, status];
    })
    .then(function(info) {
      departure = airports.findWhere({ iata: info[0] }).get("name");
      arrival = airports.findWhere({ iata: info[1] }).get("name");
      status = info[2];
      return [departure, arrival, status];
    });
}
