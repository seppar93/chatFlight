import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainTheme from "./components/Theme";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import FlightData from "./api";
import Registration from "./components/Registration";
import CB from "./components/chat_bot";
import Video from "./mapfinal.mp4";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          {/* <video className="videoTag" autoPlay loop muted> */}
          {/* <source src={Video} type="video/mp4" /> */}
          {/* </video> */}
          <h1>Welcome to ChatFlight</h1>
          <h3>The simplist way to check on your flight!</h3>
        </div>
        <div className="mainTheme">
          <CB />
        </div>
      </div>
    );
  }
}

export default App;
