import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import { Legend,ResponsiveContainer,LineChart, Line ,XAxis,YAxis,CartesianGrid,Tooltip} from 'recharts';


import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { Grid,Row,Col } from 'react-bootstrap';

class CogLineChart extends Component {
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
    }

      let data = this.props.data;

      const containerStyle = {
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        padding: '8px',
        width: '100%',
        height: '250px',
        maxHeight: '330px',
        margin: '0 auto'
      }



    return (

      <div style={{textAlign:'center',marginLeft:30,marginTop:10}}>

      <Col md={11}>
      <Paper>
      <Row>
        <Col md={1}/>
        <Col md={1}>
        <br/>
        <br/>
        <br/>
        <div style={{writingMode:'tb-rl',direction:'ltr',textAlign:'center',fontSize:26}}>
        </div>
        </Col>
        <Col md={8}>
        <div style={containerStyle}>
        <ResponsiveContainer>
        <LineChart width={400} height={'60%'} data={data}>
         <XAxis dataKey="name"  label="　　日付" name="hif"/>
         <YAxis yAxisId="left" orientation="left" stroke="#8884d8"/>
         <YAxis yAxisId="right" orientation="right" stroke="#82ca9d"/>
         <Tooltip/>
         <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend align="center" verticalAlign="top"/>
         <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
         <Line type="monotone" yAxisId="left" dataKey="単語数" stroke="#8884d8" />
      <Line type="monotone" yAxisId="right" dataKey="感情" stroke="#82ca9d" />
        </LineChart>
        </ResponsiveContainer>
        </div>
        </Col>
      </Row>
      </Paper>
      </Col>

      </div>
    );
  }
}

export default CogLineChart;
