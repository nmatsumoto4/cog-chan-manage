import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MoverTMMaster from './MoverTMMaster';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {cyan500} from 'material-ui/styles/colors';
import {
   cyan700,
  pinkA200,
  pink100,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class App extends Component {


  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: pink100,
        primary2Color: pink100,
        primary3Color: pink100,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: pinkA200,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: pink100,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
      },
    });

    return (
          <MuiThemeProvider　muiTheme={muiTheme}>
            <MoverTMMaster/>
          </MuiThemeProvider>
    );
  }
}



export default App;
