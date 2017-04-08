import React, { PropTypes} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {darkWhite, lightWhite, grey900} from 'material-ui/styles/colors';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import {spacing, typography} from 'material-ui/styles';
import {cyan500,pink100} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Timeline from './pages/timeline/main'
import Analyze from './pages/analyze/main'

import RaisedButton from 'material-ui/RaisedButton';


import FlatButton from 'material-ui/FlatButton';

class MoverTMMaster extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        open: true
      };
  }
  getStyles(){
    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex:4,
        top: 0,
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400,
        paddingLeft:350,
        position: 'relative',
      },
      content: {
        margin: spacing.desktopGutter,
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
      },
      footer: {
        paddingLeft :40,
        backgroundColor: grey900,
        textAlign: 'center',
      },
      a: {
        color: darkWhite,
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: lightWhite,
        maxWidth: 356,
      },
      browserstack: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: '25px 15px 0',
        padding: 0,
        color: lightWhite,
        lineHeight: '25px',
        fontSize: 12,
      },
      browserstackLogo: {
        margin: '0 3px',
      },
      iconButton: {
        color: darkWhite,
      },

      logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: pink100,
        paddingLeft: spacing.desktopGutter,
        marginBottom: 8,
      },
      authPage:{
      	paddingLeft:'35px',
      	paddingRight:'35px',
      	paddingTop:'35px',
      	paddingBottom:'50px',
        marginTop: '30px',
      }
    };
    if (this.props.width === MEDIUM || this.props.width === LARGE) {
      styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }
    return styles;
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
   }
   handleChangeRequestNavDrawer(open){
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
   }
   handleChangeList(event, value) {
     this.setState({
       navDrawerOpen: false,
     });
   };

   render(){
     let styles = this.getStyles();


 return (
  <Router>
    <div>
          <AppBar
            title="MOVER"
            zDepth={1}
            style={styles.appBar}
          />
          <Drawer open={this.state.open}>
          <div style={styles.logo} >
             コグちゃん
           </div>
            <MenuItem primaryText="つぶやき集" containerElement={<Link to="/"/>}/>
            <MenuItem primaryText="分析・学習コース" containerElement={<Link to="/analyze"/>}/>

          </Drawer>
          <div style={styles.root}>
            <Route exact path="/" component={Timeline}/>
            <Route exact path="/analyze" component={Analyze}/>
          </div>
      </div>
  </Router>
  )
 }
}




export default　MoverTMMaster;
