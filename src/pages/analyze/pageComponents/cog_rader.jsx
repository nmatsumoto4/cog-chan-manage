import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import  {Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis} from 'recharts';

         import {List, ListItem} from 'material-ui/List';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import ActionGrade from 'material-ui/svg-icons/action/grade';

import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import { Grid,Row,Col } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
class CogRader extends Component {
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
        width: 700,
        overflowY: 'auto',
      },
      raderChart:{
        textAlign:'center'
      },
    }
    const data = [
      { subject: 'たべもの', A: 120, B: 110, fullMark: 150 },
      { subject: 'どうぶつ', A: 98, B: 130, fullMark: 150 },
      { subject: 'あそび', A: 86, B: 130, fullMark: 150 },
      { subject: 'かぞく', A: 99, B: 100, fullMark: 150 },
      { subject: 'のりもの', A: 85, B: 90, fullMark: 150 },
      { subject: 'かんじょう', A: 65, B: 85, fullMark: 150 },
  ];



    return (

      <div style={styles.raderChart}>
      <Row >
      <Col md={8}>
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
        </RadarChart>
      </Col>
      <Col md={4}>
       <Paper>
        <List>
          <Subheader>よくしゃべる単語</Subheader>
           <ListItem
             primaryText="りんご"
             leftIcon={<i className="material-icons">local_dining</i>}
           />
           <ListItem
             primaryText="キリン"
             leftIcon={<ActionGrade color={pinkA200} />}
           />
           <ListItem
             primaryText="ママ"
             leftIcon={<ActionGrade color={pinkA200} />}
           />
           <ListItem
             primaryText="りんご"
             leftIcon={<ActionGrade color={pinkA200} />}
           />
           <ListItem
             primaryText="りんご"
             leftIcon={<ActionGrade color={pinkA200} />}
           />

        </List>
        </Paper>
      </Col>
      </Row>
      </div>
    );
  }
}

export default CogRader;
