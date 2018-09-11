import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Theme from "./components/Theme";
import ChatBot from "react-simple-chatbot";

class App extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "What is your name?",
            trigger: "2"
          },
          {
            id: "2",
            user: true,
            trigger: "3"
          },
          {
            id: "3",
            message: "Hi {previousValue}, nice to meet you!",
            end: true
          }
        ]}
      />
    );
  }
}

export default App;
