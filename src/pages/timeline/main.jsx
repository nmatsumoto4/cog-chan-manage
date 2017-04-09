import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import apple from './images/grid-list/apple.jpg';
import sky from './images/grid-list/sky.jpg';
import kounotori from './images/grid-list/kounotori.jpg';
import baby from './images/grid-list/baby.jpg';
import moon from './images/grid-list/moon.jpg';
import banana from './images/grid-list/banana.jpg';

import sammar from './images/grid-list/sammar.jpg';
import hige from './images/grid-list/hige.jpg';
import hair from './images/grid-list/hair.jpg';
import pi_man from './images/grid-list/pi-man.jpg';

import noImage from './images/grid-list/noImage.png';

import Dialog from 'material-ui/Dialog';
import {cyan500,indigo500,blue500,blue300,pink100,pink500,white,green500,lime500
} from 'material-ui/styles/colors';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import axios from 'axios'

class Timeline extends Component {

  constructor(props) {
      super(props);
      this.state = {
        open: false,
        selectedTalkLog:{
          answer:"",
          emotion:"",
          id:"",
          question:"",
          tag:"",
          time:"",
          what:"",
        },
      }
  }

  handleOpen (talkLog) {
    this.setState({
      open: true,
      selectedTalkLog:talkLog
    });
    console.log(talkLog);
  }
  handleClose () {
    this.setState({open: false});
  }

  render() {
    let styles = {
      bot:{
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        height: '600px'
      },
      root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
      },
      gridList: {
        width: 'auto',
        overflowY: 'auto',
      },
    }

  let imgName = (what) => {
     if (what==='りんご') {
       return apple;
     }
     if (what==='そら') {
       return  sky;
     }
     if (what==='コウノトリ') {
       return  kounotori;
     }
     if (what==='赤ちゃん') {
       return  baby;
     }
     if (what==='つき') {
       return  moon;
     }
     if (what==='バナナ') {
       return  banana;
     }
     if (what==='なつ') {
       return  sammar;
     }
     if (what==='ひげ') {
       return  hige;
     }
     if (what==='かみ') {
       return  hair;
     }
     if (what==='ピーマン') {
       return  pi_man;
     }
     return noImage;
   }

   let emotion= (talkLog) => {
      if (talkLog.emotion < 0.29) {
        return (<i className="material-icons" style={{color:indigo500
          ,fontSize:50}}>sentiment_very_dissatisfied</i>)
      }
      if (talkLog.emotion<0.6) {
        return (<i className="material-icons" style={{color:lime500
          ,fontSize:50}}>sentiment_neutral</i>)
      }
      if (talkLog.emotion<1.0) {
        return (<i className="material-icons" style={{color:pink500
          ,fontSize:50}}>sentiment_very_satisfied</i>)
      }

      return false;
   }
   let emotionIconButton = (talkLog) => {
        return (<FlatButton style={{height:'auto'}} onTouchTap={this.handleOpen.bind(this,talkLog)}>
        {emotion(talkLog)}
        </FlatButton>)
   }



    let hoge = () => {
      console.log("hoge");
    }

    let actions = [
      <FlatButton
        label="閉じる"
        primary={true}
        style={{height:60}}
        onTouchTap={this.handleClose.bind(this)}
      />

    ];

    let changeAnswerMessge = (talkLog) => {
      if (talkLog.emotion< 0.6) {
        actions.push(<RaisedButton
          label="回答を変更する"
          primary={true}
          style={{height:60}}
          onTouchTap={this.handleClose.bind(this)}
        />);

        return (
          <div style={{color:pink500,fontSize:27}}>
          <br/>
          コグちゃんの返答に対する反応が良くありません。
          <br/>
          回答を変更しますか？
          </div>
        )
      }
      return false
    }




    return (
      <div className="App">
        <div className="App-header">
          <div style={styles.root}>
            <GridList
              cellHeight={180}
              style={styles.gridList}>

            <Subheader style={{fontSize:20}}>タカシ君とコグちゃんの会話</Subheader>
              {this.props.talkLogs.map((talkLog) => (
                <GridTile
                  cols={1}
                  key={talkLog.id}
                  title={talkLog.question}
                  subtitle={talkLog.time}
                  actionIcon={emotionIconButton(talkLog)}
                >
                  <img  src={imgName(talkLog.what)} />
                </GridTile>
              ))}
            </GridList>
          </div>

        </div>
        <Dialog
          title={this.state.selectedTalkLog.question}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
        >
          コグちゃんの返答：{this.state.selectedTalkLog.answer}
          <br/>
          <br/>
          それに対するタカシ君の感情：{emotion(this.state.selectedTalkLog)}
          {changeAnswerMessge(this.state.selectedTalkLog)}


        </Dialog>
      </div>
    );
  }
}
Timeline.DefaultProps={
  talkLogs : []
}

Timeline.PropTypes={
  talkLogs : React.PropTypes.any
}


export default Timeline;
