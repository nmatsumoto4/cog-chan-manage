import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import logo from './images/grid-list/00-52-29-429_640.jpg';
import apple from './images/grid-list/apple.jpg';
import { LineChart, Line ,XAxis,YAxis,CartesianGrid} from 'recharts';


class Analyze extends Component {
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
    const tilesData = [
            {
              img: logo,
              title: 'Breakfast',
              author: 'jill111',
            },
            {
              img: apple,
              title: 'Tasty burger',
              author: 'pashminu',
            },
            {
              img: './images/grid-list/00-52-29-429_640.jpg',
              title: 'Camera',
              author: 'Danson67',
            },
            {
              img: 'images/grid-list/morning-819362_640.jpg',
              title: 'Morning',
              author: 'fancycrave1',
            },
            {
              img: 'images/grid-list/hats-829509_640.jpg',
              title: 'Hats',
              author: 'Hans',
            },
            {
              img: 'images/grid-list/honey-823614_640.jpg',
              title: 'Honey',
              author: 'fancycravel',
            },
            {
              img: 'images/grid-list/vegetables-790022_640.jpg',
              title: 'Vegetables',
              author: 'jill111',
            },
            {
              img: 'images/grid-list/water-plant-821293_640.jpg',
              title: 'Water plant',
              author: 'BkrmadtyaKarki',
            },
          ];
  const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ];



    return (
      <div className="App">
        <div className="App-header">
        <LineChart width={500} height={300} data={data}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
         <Line type="monotone" dataKey="uv" stroke="#8884d8" />
         <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>

          <div >
            <iframe style={styles.bot} src='https://webchat.botframework.com/embed/cog-chan?s=wy_FmcttsJE.cwA.NB8.rHDZrsR_MVXPFEEGLErY4-UIxJGjAyCycjhXJZ3VIW4'></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Analyze;
