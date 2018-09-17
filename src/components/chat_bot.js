import React, { Component } from "react";
import MainTheme from "./Theme";
import steps from "../Steps";

class CB extends Component {
  render() {
    return (
      <div>
        <MainTheme steps={steps} />
      </div>
    );
  }
}

export default CB;
