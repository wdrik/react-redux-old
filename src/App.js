import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleClickBtn = this.handleClickBtn.bind(this);
  }

  componentWillMount() {
    this.setState({
      msg: ''
    })
  }

  handleClickBtn() {
    this.setState({
      msg: 'Hello world'
    })
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClickBtn }>Click to Hello</button>
        <p>{ this.state.msg }</p>
      </div>
    );
  }
}

export default App;
