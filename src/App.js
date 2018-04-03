import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      name: "Saeed Mokhtari",
    }
  }

  onChangeName(){
    this.setState({
      name: "Majid Mokhtari"
    })
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Mr {` ${name}`}  </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.onChangeName.bind(this)}>Change Name</button>
      </div>
    );
  }
}

export default App;
