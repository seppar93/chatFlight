import React, { Component } from "react";
import DataRetriever from "DataRetriever";

class NeuralNetwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "",
      result: null
    };
  }
  this.state({price: 323, output: true});
  let net = new brain.NeuralNetwork();
  net.train([{ input: { price: 323, result:true }, output: { true } },
            { input: { price: 500,result: false  }, output: { false } },
            { input: { price: 200,result: true }, output: { true} }]);
  let output = net.run({ price: 600, result: false})
}
export default NeuralNetwork;
