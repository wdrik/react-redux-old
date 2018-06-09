import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {

  }

  handleDecrement() {

  }

  render() {
    return(
      <div>
        <h2>Clicked: 0 times</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    ) 
  }
}

export default Counter;
