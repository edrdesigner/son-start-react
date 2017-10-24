import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import PropsValidation from './components/PropsValidation/PropsValidation';
import Events from './components/Events/Events';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         <Events />
         {/* <HelloWorld txt='Hello World'/> */}
         {/* <PropsValidation name="Edu" age="31" height="1.86" /> */}
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
