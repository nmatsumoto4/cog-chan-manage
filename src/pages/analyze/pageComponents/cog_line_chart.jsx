import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import { LineChart, Line ,XAxis,YAxis,CartesianGrid,Tooltip} from 'recharts';


import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

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
    const data = [
        {name: '05/01', uv: 4000, pv: 2400, amt: 2400},
        {name: '05/02', uv: 3000, pv: 1398, amt: 2210},
        {name: '05/03', uv: 2000, pv: 9800, amt: 2290},
        {name: '05/04', uv: 2780, pv: 3908, amt: 2000},
        {name: '05/05', uv: 1890, pv: 4800, amt: 2181},
        {name: '05/06', uv: 2390, pv: 3800, amt: 2500},
        {name: '05/07', uv: 3490, pv: 4300, amt: 2100},
      ];



    return (

      <div style={{textAlign:'center'}}>
      <LineChart width={600} height={300} data={data}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
       <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
      </div>
    );
  }
}

export default CogLineChart;
