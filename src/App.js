import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Theme from "./components/Theme";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

class App extends Component {
  render() {
    // console.log(Theme);
    return (
      <ThemeProvider theme={Theme}>
        <ChatBot
          avatar=""
          steps={[
            {
              id: "1",
              message:
                "Welcome to ChatFlight I'm FlightBot how can I help you?",
              trigger: "2"
            },
            {
              id: "2",
              options: [
                { value: 1, label: "Login", trigger: "3" },
                { value: 2, label: "Register", trigger: "5" }
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
              message:
                "Welcome back {previousValue}! please type in your password",
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
              message: "Thanks! Your account was setup successfully!",
              trigger: "ask-flight-search"
            },
            {
              id: "9",
              // TODO: user name added here
              message: "Hello {previousValue} here are your previous seraches",
              trigger: "previous-search"
            },
            {
              id: "previous-search",
              message: "PREVIOUS SEARCH",
              // TODO: previous search component
              trigger: "ask-flight-search"
            },
            {
              id: "ask-flight-search",
              message:
                "What flight would you like to to search {previousValue}?",
              trigger: "flight-search"
            },
            {
              id: "flight-search",
              user: true,
              // message: "searching...",
              message: "THIS IS WHERE THE COMMPONENT IS FOR API",
              // waitAction: true,
              trigger: "searching"
            },
            {
              id: "searching",
              message: "searching...",
              // TODO: remove message and add API componenet here
              trigger: "save-option"
            },
            {
              id: "save-option",
              message: "would you like to save the result of your search?",
              trigger: "save-message"
            },
            {
              id: "save-message",
              options: [
                { value: 1, label: "Yes", trigger: "save" },
                { value: 2, label: "No", trigger: "10" }
              ]
            },
            {
              id: "save",
              message: "your flight information has been saved!",
              trigger: "10"
              // TODO: add component to save
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
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default App;
