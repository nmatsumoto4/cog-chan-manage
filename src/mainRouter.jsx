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
import {darkWhite, lightWhite, grey900,yellow50,pink200} from 'material-ui/styles/colors';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import {spacing, typography} from 'material-ui/styles';
import {cyan500,pink100,pink50
} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Timeline from './pages/timeline/main'
import Analyze from './pages/analyze/main'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import RaisedButton from 'material-ui/RaisedButton';

import axios from 'axios'
import FlatButton from 'material-ui/FlatButton';

class MoverTMMaster extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        open: true,
        talkLogs:[
          {
            id: "1",
            time: "2017年 4月 8日 土曜日 17時55分20秒 JST",
            question: "りんごはなんで丸いの?",
            answer: "受精しためしべの子房が膨らんでいってできる球形に近い形になるんだよ",
            tag: "たべもの",
            what: "りんご",
            emotion: ".2"
          },
          {
            id: "2",
            time: "2017年 4月 7日 金曜日 14時25分20秒 JST",
            question: "なぜ空は青いの？",
            answer: "太陽は虹色(7色)の光でできているんだけど、その中でも青い光は一番強くて、どこまでも広がっていくの！だからお空一面、青色に見えるんだよ",
            tag: "しぜん",
            what: "そら",
            emotion: ".6"
          },
          {
            id: "3",
            time: "2017年 4月 6日 木曜日 13時18分20秒 JST",
            question: "コウノトリさんってなあに？",
            answer: "りんごは赤い色の色素「アントシアニン」が多いからだよ",
            tag: "いきもの",
            what: "コウノトリ",
            emotion: ".7"
          },
          {
            id: "4",
            time: "2017年 4月 6日 木曜日 13時15分20秒 JST",
            question: "赤ちゃんはどこから生まれるの？",
            answer: "コウノトリさんが届けてくれたからだよ",
            tag: "いきもの",
            what: "赤ちゃん",
            emotion: ".5"
          },
          {
            id: "5",
            time: "2017年 4月 6日 木曜日 13時05分20秒 JST",
            question: "なぜ昼間でも月が見えるときがあるの？",
            answer: "太陽の光はとっても強くて明るいから、お月様は負けてしまってよく見えないことが多いんだけど、本当は、お月様はずっと空に出ているんだよ",
            tag: "しぜん",
            what: "つき",
            emotion: ".6"
          },
          {
            id: "6",
            time: "2017年 4月 5日 水曜日 17時55分20秒 JST",
            question: "バナナはなんで黄色いの？",
            answer: "りんごは赤い色の色素「アントシアニン」が多いからだよ",
            tag: "たべもの",
            what: "バナナ",
            emotion: ".3"
          },
          {
            id: "7",
            time: "2017年 4月 5日 水曜日 14時55分20秒 JST",
            question: "夏はなんで暑いの？",
            answer: "りんごは赤い色の色素「アントシアニン」が多いからだよ",
            tag: "しぜん",
            what: "なつ",
            emotion: ".9"
          },
          {
            id: "8",
            time: "2017年 4月 5日 水曜日 17時55分20秒 JST",
            question: "パパはなんでヒゲが生えているの？",
            answer: "りんごは赤い色の色素「アントシアニン」が多いからだよ",
            tag: "にんげん",
            what: "ひげ",
            emotion: ".3"
          },
          {
            id: "9",
            time: "2017年 4月 4日 火曜日 17時55分20秒 JST",
            question: "どうして髪の毛は黒いの？",
            answer: "りんごは赤い色の色素「アントシアニン」が多いからだよ",
            tag: "いきもの",
            what: "かみ",
            emotion: ".3"
          },
          {
            id: "10",
            time: "2017年 4月 4日 火曜日 17時55分20秒 JST",
            question: "ピーマンはなんで食べなきゃダメなの？",
            answer: "りんごは赤い色の色素「アントシアニン」が多いからだよ",
            tag: "たべもの",
            what: "ピーマン",
            emotion: ".6"
          }
          ]
        }
        this.getTalkLog();

  };
  getTalkLog(){
          axios.defaults.baseURL = 'http://13.65.199.191:3000';
          axios.get('/api/v1/users')
          .then(res => {
            this.setState({
              talkLogs:res.data
            })
          })
          .catch(error => {
            throw error
          })
  }
  getStyles(){
    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex:4,
        color:pink100,
        top: 0,
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400,
        paddingTop:80,
        paddingLeft:270,
        paddingRight:320,
        position: 'relative',
        height:'100%',
        backgroundColor:pink50,
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
        fontSize: 36,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: pink200,
        paddingLeft: spacing.desktopGutter,
        marginBottom: 8,
        fontFamily: "Nikukyu",
      },
      authPage:{
      	paddingLeft:'35px',
      	paddingRight:'35px',
      	paddingTop:'35px',
      	paddingBottom:'50px',
        marginTop: '30px',
      },
      bot:{
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        height: '90%',
        width:'300px'
      },
      main:{
      },
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
    <div style={styles.main}>
          <AppBar
            title="コグちゃん"
            zDepth={1}
            style={styles.appBar}
          />
          <Drawer open={this.state.open}>
          <div style={styles.logo} >
             コグちゃん
           </div>
            <MenuItem primaryText="タカシ君とコグちゃんの会話"　active={true} containerElement={<Link to="/"/>}/>
            <MenuItem primaryText="タカシ君の会話分析" containerElement={<Link to="/analyze"/>}/>

          </Drawer>
          <div style={styles.root}>
            <Paper  zDepth={1} >
              <Route exact path="/analyze" component={Analyze}/>
              <Route exact path="/"
               render={() => <Timeline talkLogs = {this.state.talkLogs}/>} />
            </Paper>
          </div>
          <div >
            <iframe style={styles.bot}　src='https://webchat.botframework.com/embed/cog-chan5?s=Z_1uLUVGKMo.cwA.p4U.PaIoHKbmQ-3Ru25P_wLo6MO9lNYzIloLz9WmbKm94_4'></iframe>
        </div>
  </div>
  </Router>
  )
 }
}




export default　MoverTMMaster;
