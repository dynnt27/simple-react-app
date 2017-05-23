import React, { Component, ReactDOM } from 'react';

import Header from './components/header.js';
import Instructions from './components/instructions.js';
import Label from './components/label.js';
import Input from './components/input.js';
import Button from './components/button.js';
import Dropdown from './components/dropdown.js';

// import logo from './logo.svg';
// import './App.css';

const instructionMessage = "Choose an operator and then input a number to compute on every element of the default array";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      defaultArray: [34,26,11,25,72],
      defaultOperator: ['multiply','divide','add','subtract'],
      computedArray: [],
    }
    this.onCompute = this.onCompute.bind(this);
  }

  onCompute(array = this.state.defaultArray) {
    const { computedArray, defaultArray } = this.state;
    // let _this = this;
    let newArr = [];

    let chosenOperator = document.getElementById('operator').value;
    let input = parseInt(document.getElementById('myInput').value);

    switch(chosenOperator) {
      case 'multiply':
          newArr = array.map((item) => { return item * input});
          this.setState({ computedArray: [...newArr] });
          break
      case 'divide':
          newArr = array.map((item) => { return item / input});
          this.setState({ computedArray: [...newArr] });
          break
      case 'add':
          newArr = array.map((item) => { return item + input});
          this.setState({ computedArray: [...newArr] });
          break
      case 'subtract':
          newArr = array.map((item) => { return item - input});
          this.setState({ computedArray: [...newArr] });
          break
    }

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <Header message="Welcome to my react-app by Dynn" />
        </div>
        <div className="App-intro">
          <Instructions message={instructionMessage} />
          <Input inputLabel="Number: " />
          <Dropdown dropdownLabel="Operator: " defaultOperator={this.state.defaultOperator} />
          <Button buttonLabel="Run me" onCompute={this.onCompute} />
          <Label labelName={this.state.defaultArray} />
          <Label labelName={this.state.computedArray} />
        </div>
      </div>
    );
  }
}

export default App;
