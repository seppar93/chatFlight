import React, { Component } from "react";
import MainTheme from "./Theme";
import steps from "../Steps";
import Registration from "./Registration";

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
