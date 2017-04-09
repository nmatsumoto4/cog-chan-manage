import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import  {Radar, RadarChart, PolarGrid, Legend,PieChart,Pie,Tooltip,
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
  //   const data = [
  //     { subject: 'たべもの', A: 120, B: 110, fullMark: 150 },
  //     { subject: 'どうぶつ', A: 98, B: 130, fullMark: 150 },
  //     { subject: 'あそび', A: 86, B: 130, fullMark: 150 },
  //     { subject: 'かぞく', A: 99, B: 100, fullMark: 150 },
  //     { subject: 'のりもの', A: 85, B: 90, fullMark: 150 },
  //     { subject: 'かんじょう', A: 65, B: 85, fullMark: 150 },
  // ];
  const data = this.props.data;

  const data02 = this.props.data02;
   const data01 = this.props.data01;


    return (

      <div style={styles.raderChart}>
      <Row style={{marginLeft:30,marginTop:30 }}>
      <Col md={3}>
      <Paper style={{paddingRight:0 }}>
        <List >
          <Subheader>よくしゃべる単語</Subheader>

           <ListItem
             primaryText={data01[0].name}
             leftIcon={<i className="material-icons">star</i>}
           />
           <ListItem
             primaryText={data01[1].name}
             leftIcon={<i className="material-icons">star</i>}
           />
           <ListItem
             primaryText={data01[2].name}
             leftIcon={<i className="material-icons">star</i>}
           />
           <ListItem
             primaryText={data01[3].name}
             leftIcon={<i className="material-icons">star</i>}
           />
           <ListItem
             primaryText={data01[4].name}
             leftIcon={<i className="material-icons">star</i>}
           />

        </List>
        </Paper>
      </Col>

      <Col md={8}>
      <Paper >
      <div>

      <Col md={12}>
      <Paper>
          <Row>
          <Col md={7}>
          <PieChart width={399} height={296}>
            <Pie data={data02} cx={200} cy={200} i
            startAngle={0}
              endAngle={180}
            outerRadius={130} fill="#82ca9d" />
            <Tooltip/>
           </PieChart>

           </Col>
           <Col md={4}>
           <List >
             <Subheader>グループの割合</Subheader>
              <ListItem
                primaryText={data02[0].name +' '+ data02[0].value +'%'}
              />
              <ListItem
              primaryText={data02[1].name +' '+ data02[1].value +'%'}
              />
              <ListItem
              primaryText={data02[2].name +' '+ data02[2].value +'%'}
              />
              <ListItem
              primaryText={data02[3].name +' '+ data02[3].value +'%'}
              />
              <ListItem
              primaryText={data02[4].name +' '+ data02[4].value +'%'}
              />

           </List>
           </Col>
           </Row>
           </Paper>
          </Col>
          <Col md={2}>
          </Col>
          </div>

      </Paper>
      </Col>


      </Row>
      </div>
    );
  }
}

export default CogRader;
