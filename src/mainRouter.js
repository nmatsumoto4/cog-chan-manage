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

        talkLogs:
        [{
                Answer: "受精しためしべの子房が膨らんでいってできる球形に近い形になるんだよ",
                Emotion: "0.2944368",
                Question: "りんごはなんで丸いの?",
                Tag: "たべもの",
                Time: "2017年 03月 58日 Sat曜日 03時58分55秒 JST",
                UpdateTime: "20170513035855",
                What: "りんご",
                id: "1"
            },
            {
                Answer: "コウノトリさんが届けてくれたからだよ",
                Emotion: ".5",
                Question: "赤ちゃんはどこから生まれるの？",
                Tag: "いきもの",
                Time: "2017年 13月 15日 Thu曜日 01時15分20秒 JST",
                UpdateTime: "20170406131520",
                What: "赤ちゃん",
                id: "4"
            },
            {
                Answer: "りんごは赤い色の色素「アントシアニン」が多いからだよ",
                Emotion: ".3",
                Question: "バナナはなんで黄色いの？",
                Tag: "たべもの",
                Time: "2017年 17月 55日 Wed曜日 05時55分20秒 JST",
                UpdateTime: "20170405175520",
                What: "バナナ",
                id: "6"
            },
            {
                Answer: "りんごは赤い色の色素「アントシアニン」が多いからだよ",
                Emotion: ".6",
                Question: "ピーマンはなんで食べなきゃダメなの？",
                Tag: "たべもの",
                Time: "2017年 17月 55日 Tue曜日 05時55分20秒 JST",
                UpdateTime: "20170404175520",
                What: "ピーマン",
                id: "10"
            },
            {
                Answer: "りんごは赤い色の色素「アントシアニン」が多いからだよ",
                Emotion: ".3",
                Question: "パパはなんでヒゲが生えているの？",
                Tag: "にんげん",
                Time: "2017年 17月 55日 Wed曜日 05時55分20秒 JST",
                UpdateTime: "20170405175520",
                What: "ひげ",
                id: "8"
            },
            {
                Answer: "りんごは赤い色の色素「アントシアニン」が多いからだよ",
                Emotion: ".3",
                Question: "どうして髪の毛は黒いの？",
                Tag: "いきもの",
                Time: "2017年 17月 55日 Tue曜日 05時55分20秒 JST",
                UpdateTime: "20170404175520",
                What: "かみ",
                id: "9"
            },
            {
                Answer: "太陽は虹色(7色)の光でできているんだけど、その中でも青い光は一番強くて、どこまでも広がっていくの！だからお空一面、青色に見えるんだよ",
                Emotion: ".6",
                Question: "なぜ空は青いの？",
                Tag: "しぜん",
                Time: "2017年 14月 25日 Fri曜日 02時25分20秒 JST",
                UpdateTime: "20170407142520",
                What: "そら",
                id: "2"
            },
            {
                Answer: "りんごは赤い色の色素「アントシアニン」が多いからだよ",
                Emotion: ".9",
                Question: "夏はなんで暑いの？",
                Tag: "しぜん",
                Time: "2017年 14月 55日 Wed曜日 02時55分20秒 JST",
                UpdateTime: "20170405145520",
                What: "なつ",
                id: "7"
            },
            {
                Answer: "りんごは赤い色の色素「アントシアニン」が多いからだよ",
                Emotion: ".7",
                Question: "コウノトリさんってなあに？",
                Tag: "いきもの",
                Time: "2017年 13月 18日 Thu曜日 01時18分20秒 JST",
                UpdateTime: "20170406131820",
                What: "コウノトリ",
                id: "3"
            },
            {
                Answer: "太陽の光はとっても強くて明るいから、お月様は負けてしまってよく見えないことが多いんだけど、本当は、お月様はずっと空に出ているんだよ",
                Emotion: ".6",
                Question: "なぜ昼間でも月が見えるときがあるの？",
                Tag: "しぜん",
                Time: "2017年 13月 05日 Thu曜日 01時05分20秒 JST",
                UpdateTime: "20170406130520",
                What: "つき",
                id: "5"
            }
        ],
        }
        this.getTalkLog();

  };
  getTalkLog(){
          axios.defaults.baseURL = 'https://cogchanfunction.azurewebsites.net';
          axios.get('/api/MotherDisplayMain?code=ht9qOca4C3H2RpIwEzJe4FvJ4tFr0yteXKQZJtMbLG9AqctSyb1L6A==')
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
