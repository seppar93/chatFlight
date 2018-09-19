import React from "react";
import Registration from "./components/Registration";
import FlightData from "./api";
import DataRetriever from "./components/DataRetriever";
// import NeuralMessage from "./components/NeuralMessage";

const steps = [
  {
    id: "1",
    // component: <DataRetriever />,
    message: "Welcome to ChatFlight I'm FlightBot how can I help you?",
    trigger: "2"
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Login", trigger: "3" },
      { value: 2, label: "Register", trigger: "5" },
      { value: 3, label: "Flight Search", trigger: "ask-flight-search" }
    ]
  },
  {
    id: "3",
    message: " What is your username?",
    trigger: "check-username"
  },
  {
    id: "check-username",
    user: true,
    validator: value => {
      // TODO: grab values from data set run a loop through it
      if (value !== "sep") {
        // if (!arr.includes(value))
        // TODO: loop back to register
        return "It seems that you are not registered";
      }
      return true;
    },
    trigger: "password-message"
  },
  {
    id: "password-message",
    message: "Welcome back {previousValue}! please type in your password",
    trigger: "check-password"
  },
  {
    id: "check-password",
    user: true,
    validator: value => {
      // TODO: grab values from data set run a loop through it
      if (value !== "sep") {
        // if (!arr.includes(value))
        // TODO: loop back to register
        return "Wrong password try agian";
      }
      return true;
    },
    trigger: "9"
  },
  {
    id: "5",
    message: "what would you like your username to be?",
    trigger: "username"
  },
  {
    id: "username",
    user: true,
    trigger: "6" // export user name to database componenet to save username state
  },
  {
    id: "6",
    message: "great what would you like your password to be?",
    trigger: "password"
  },
  {
    id: "password",
    user: true,
    trigger: "8"
  },
  {
    id: "8",
    // message: "Thanks! Your account was setup successfully!",
    component: <Registration />,
    trigger: "10"
  },
  {
    id: "9",
    message: "here are your previous seraches",
    trigger: "previous-search"
  },
  {
    id: "previous-search",
    component: <DataRetriever />,
    trigger: "ask-flight-search"
  },
  {
    id: "ask-flight-search",
    message: "Where are you travling from?",
    trigger: "cityOrig"
  },
  {
    id: "cityOrig",
    user: true,
    trigger: "ask-destination"
  },
  {
    id: "ask-destination",
    message: "Where would you look to travel to?",
    trigger: "cityDest"
  },
  {
    id: "cityDest",
    user: true,
    trigger: "ask-departure"
  },
  {
    id: "ask-departure",
    message: "when would you like to leave please answer in (yyyy-mm-dd)",
    trigger: "depDate"
  },
  {
    id: "depDate",
    user: true,
    trigger: "searching-message"
  },
  {
    id: "searching-message",
    message: "searching...",
    trigger: "searching"
  },
  {
    id: "searching",
    component: <FlightData />,
    // waitAction: true,
    trigger: "save-option"
  },
  {
    id: "save-option",
    message:
      "would you like to use our nueral network to know if the price is reduce?",
    trigger: "save-message"
  },
  {
    id: "save-message",
    options: [
      { value: 1, label: "Yes", trigger: "Neural-Message" },
      { value: 2, label: "No", trigger: "10" }
    ]
  },
  {
    id: "Neural-Message",
    message: "The probability of price reduction on your flight is 32%",
    // componenet: <NeuralMessage />,
    trigger: "10"
  },
  {
    id: "10",
    message: "Would you like search for another flight?",
    trigger: "11"
  },
  {
    id: "11",
    options: [
      { value: 1, label: "Yes", trigger: "9" },
      { value: 2, label: "No", trigger: "12" }
    ]
  },
  {
    id: "12",
    message: "GoodBye!",
    end: true
  }
];
export default steps;
