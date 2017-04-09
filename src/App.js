import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainRouter from './mainRouter';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {cyan500} from 'material-ui/styles/colors';
import {
   cyan700,
  pinkA200,
  pink100,pink50,

  grey100, grey300, grey400, grey500,pink500,pink200,
  white, darkBlack, fullBlack,yellow50

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
        primary1Color: pink200,
        primary2Color: pink200,
        primary3Color: pink200,
        accent1Color: pink200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: pink500,
        alternateTextColor: white,
        canvasColor: pink50
,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: pink100,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
      },
    });

    return (
          <MuiThemeProvider　muiTheme={muiTheme}>
          <div style={{backgroundColor:pink50,height:'100%'}}>
            <MainRouter/>
          </div>
          </MuiThemeProvider>
    );
  }
}



export default App;
