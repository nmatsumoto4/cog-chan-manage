import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import iframe from 'react-iframe';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reactssss</h2>
          <h1>aaaaaa</h1>
          <iframe src='https://webchat.botframework.com/embed/cog-chan?s=wy_FmcttsJE.cwA.NB8.rHDZrsR_MVXPFEEGLErY4-UIxJGjAyCycjhXJZ3VIW4'></iframe>

          <MuiThemeProvider>
            <RaisedButton label="Default" />
          </MuiThemeProvider>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
