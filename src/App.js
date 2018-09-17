import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainTheme from "./components/Theme";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import FlightData from "./api";
import Registration from "./components/Registration";
import CB from "./components/chat_bot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to ChatFlight</h1>
          <h4>The simplist way to check on your flight!</h4>
        </div>
        <div className="mainTheme">
          <CB />
        </div>
      </div>
    );
  }
}

export default App;
