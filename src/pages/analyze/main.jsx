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

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import CogRader from './pageComponents/cog_rader'
import CogLineChart from './pageComponents/cog_line_chart'
import CogPieChart from './pageComponents/cog_pie_chart'
import { Grid,Row,Col } from 'react-bootstrap';
var url = require('url')





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
    let config = {
      endpoint:"https://cog-chan.documents.azure.com:443/",
      primaryKey:"UmQNiAtzBFb1Gyh4gex7PI9y3IYZvwywlJYkzFli2EXSP9m9v1Yevp3mVAZB8IE8E79SGivy1BcOs8EOAf65IA==",
      database:{
        "id": "cog-chan"
      },
      collection:"cog-chan"

    };


    var documentClient = require("documentdb").DocumentClient;
    let url = require('url');
    let client = new documentClient(config.endpoint, { "masterKey": config.primaryKey });
    var collectionUrl = `${databaseUrl}/colls/${config.collection.id}`;

    var databaseUrl = `dbs/${config.database.id}`;
    function queryCollection() {
        console.log(`Querying collection through index:\n${config.collection.id}`);

        return new Promise((resolve, reject) => {
            client.queryDocuments(
                collectionUrl,
                'SELECT VALUE r.children FROM root r WHERE r.lastName = "Andersen"'
            ).toArray((err, results) => {
                if (err) reject(err)
                else {
                    for (var queryResult of results) {
                        let resultString = JSON.stringify(queryResult);
                        console.log(`\tQuery returned ${resultString}`);
                    }
                    console.log();
                    resolve(results);
                }
            });
        });
    };


    // ADD THIS PART TO YOUR CODE
    //  queryCollection()
    // ENDS HERE
    const lineData_1 = [
        {name: '03/10', 単語数: 43, 感情:0.6, amt: 2400},
        {name: '03/11', 単語数: 32, 感情:0.6, amt: 2400},
        {name: '03/12', 単語数: 40, 感情:0.3, amt: 2400},
        {name: '03/13', 単語数: 34, 感情:0.62, amt: 2400},
        {name: '03/14', 単語数: 40, 感情:0.4, amt: 2400},
        {name: '03/15', 単語数: 33,  感情:0.58, amt: 2400},
        {name: '03/16', 単語数: 48, 感情:0.4, amt: 2400},
        {name: '03/17', 単語数: 43,  感情:0.61, amt: 2400},
        {name: '03/18', 単語数: 44, 感情:0.4, amt: 2400},
        {name: '03/19', 単語数: 35, 感情:0.61, amt: 2400},
        {name: '03/20', 単語数: 48, 感情:0.2, amt: 2400},
        {name: '03/21', 単語数: 33, 感情:0.62, amt: 2400},
        {name: '03/22', 単語数: 44, 感情:0.7, amt: 2400},
        {name: '03/23', 単語数: 35, 感情:0.58, amt: 2400},
        {name: '03/24', 単語数: 40, 感情:0.7, amt: 2400},
        {name: '03/25', 単語数: 31, 感情:0.66, amt: 2400},
        {name: '03/26', 単語数: 40, 感情:0.4, amt: 2400},
        {name: '03/27', 単語数: 30, 感情:0.6, amt: 2400},
        {name: '03/28', 単語数: 51, 感情:0.7, amt: 2400},
        {name: '03/29', 単語数: 54, 感情:0.59, amt: 2400},
        {name: '03/30', 単語数: 48, 感情:0.4, amt: 2400},
        {name: '03/31', 単語数: 30, 感情:0.64, amt: 2400},
        {name: '04/01', 単語数: 52, 感情:0.6, amt: 2400},
        {name: '04/02', 単語数: 45, 感情:0.68, amt: 2400},
        {name: '04/03', 単語数: 55, 感情:0.66, amt: 2400},
        {name: '04/04', 単語数: 30, 感情:0.8, amt: 2400},
        {name: '04/05', 単語数: 59, 感情:0.70, amt: 2400},
        {name: '04/06', 単語数: 55, 感情:0.7, amt: 2400},
        {name: '04/07', 単語数: 58, 感情:0.70, amt: 2400},
        {name: '04/08', 単語数: 59, 感情:0.6, amt: 2400},
        {name: '04/09', 単語数: 61, 感情:0.71, amt: 2400},

      ];
      const pieData_1 = [
        { subject: 'たべもの', A: 120, B: 110, fullMark: 150 },
        { subject: 'どうぶつ', A: 98, B: 130, fullMark: 150 },
        { subject: 'あそび', A: 86, B: 130, fullMark: 150 },
        { subject: 'かぞく', A: 99, B: 100, fullMark: 150 },
        { subject: 'のりもの', A: 85, B: 90, fullMark: 150 },
        { subject: 'かんじょう', A: 65, B: 85, fullMark: 150 },
      ];
      const pieData02_1 = [{name: 'たべもの', value: 32},
                        {name: 'いきもの', value: 21},
                       {name: 'にんげん', value: 12},
                       {name: 'しぜん', value: 9},
                       {name: 'そのた', value: 17},
                     ]
       const pieData01_1 = [{name: 'りんご', value: 32},
                         {name: 'おはな', value: 21},
                        {name: 'ママ', value: 12},
                        {name: 'さくら', value: 9},
                        {name: 'パパ', value: 17},
                      ]

    const lineData_3 = [
        {name: '01/10', 単語数: 31, 感情:0.36, amt: 2400},
        {name: '01/13', 単語数: 38, 感情:0.41, amt: 2400},
        {name: '01/16', 単語数: 29, 感情:0.3, amt: 2400},
        {name: '01/19', 単語数: 30, 感情:0.45, amt: 2400},
        {name: '01/22', 単語数: 31, 感情:0.4, amt: 2400},
        {name: '01/25', 単語数: 30,  感情:0.48, amt: 2400},
        {name: '01/28', 単語数: 31, 感情:0.24, amt: 2400},
        {name: '01/31', 単語数: 35,  感情:0.3, amt: 2400},
        {name: '02/02', 単語数: 29, 感情:0.39, amt: 2400},
        {name: '02/05', 単語数: 33, 感情:0.39, amt: 2400},
        {name: '02/08', 単語数: 38, 感情:0.51, amt: 2400},
        {name: '02/11', 単語数: 40, 感情:0.45, amt: 2400},
        {name: '02/14', 単語数: 41, 感情:0.52, amt: 2400},
        {name: '02/17', 単語数: 35, 感情:0.6, amt: 2400},
        {name: '02/20', 単語数: 43, 感情:0.56, amt: 2400},
        {name: '02/23', 単語数: 41, 感情:0.6, amt: 2400},
        {name: '02/26', 単語数: 49, 感情:0.62, amt: 2400},
        {name: '03/01', 単語数: 42, 感情:0.58, amt: 2400},
        {name: '03/04', 単語数: 48, 感情:0.61, amt: 2400},
        {name: '03/07', 単語数: 44, 感情:0.61, amt: 2400},
        {name: '03/10', 単語数: 40, 感情:0.62, amt: 2400},
        {name: '03/13', 単語数: 40, 感情:0.58, amt: 2400},
        {name: '03/16', 単語数: 51, 感情:0.66, amt: 2400},
        {name: '03/19', 単語数: 48, 感情:0.6, amt: 2400},
        {name: '03/22', 単語数: 52, 感情:0.59, amt: 2400},
        {name: '03/25', 単語数: 45, 感情:0.64, amt: 2400},
        {name: '03/28', 単語数: 52, 感情:0.68, amt: 2400},
        {name: '03/31', 単語数: 55, 感情:0.66, amt: 2400},
        {name: '04/03', 単語数: 59, 感情:0.70, amt: 2400},
        {name: '04/06', 単語数: 58, 感情:0.68, amt: 2400},
        {name: '04/09', 単語数: 61, 感情:0.71, amt: 2400},

      ];
      const pieData_3 = [
        { subject: 'たべもの', A: 120, B: 110, fullMark: 150 },
        { subject: 'どうぶつ', A: 98, B: 130, fullMark: 150 },
        { subject: 'あそび', A: 86, B: 130, fullMark: 150 },
        { subject: 'かぞく', A: 99, B: 100, fullMark: 150 },
        { subject: 'のりもの', A: 85, B: 90, fullMark: 150 },
        { subject: 'かんじょう', A: 65, B: 85, fullMark: 150 },
      ];
      const pieData02_3 = [{name: 'たべもの', value: 27},
                        {name: 'にんげん', value: 18},
                       {name: 'しぜん', value: 16},
                       {name: 'のりもの', value: 13},
                       {name: 'そのた', value: 26},
                     ]
       const pieData01_3 = [{name: 'もち', value: 32},
                         {name: 'おひなさま', value: 21},
                        {name: 'ママ', value: 12},
                        {name: 'ふゆ', value: 9},
                        {name: 'くるま', value: 17},
                      ]

      const lineData_6 = [
          {name: '10/16', 単語数: 5, 感情:0.1, amt: 2400},
          {name: '10/22', 単語数: 8, 感情:0.2, amt: 2400},
          {name: '10/28', 単語数: 12, 感情:0.22, amt: 2400},
          {name: '11/02', 単語数: 14, 感情:0.23, amt: 2400},
          {name: '11/08', 単語数: 16, 感情:0.25, amt: 2400},
          {name: '11/14', 単語数: 20,  感情:0.15, amt: 2400},
          {name: '11/20', 単語数: 15, 感情:0.25, amt: 2400},
          {name: '11/26', 単語数: 19,  感情:0.28, amt: 2400},
          {name: '12/01', 単語数: 21, 感情:0.32, amt: 2400},
          {name: '12/07', 単語数: 28, 感情:0.34, amt: 2400},
          {name: '12/13', 単語数: 32, 感情:0.32, amt: 2400},
          {name: '12/19', 単語数: 34, 感情:0.38, amt: 2400},
          {name: '12/25', 単語数: 39, 感情:0.32, amt: 2400},
          {name: '12/31', 単語数: 42, 感情:0.45, amt: 2400},
          {name: '01/05', 単語数: 31, 感情:0.34, amt: 2400},
          {name: '01/11', 単語数: 31, 感情:0.42, amt: 2400},
          {name: '01/17', 単語数: 29, 感情:0.41, amt: 2400},
          {name: '01/23', 単語数: 38, 感情:0.45, amt: 2400},
          {name: '01/29', 単語数: 41, 感情:0.48, amt: 2400},
          {name: '02/04', 単語数: 45, 感情:0.24, amt: 2400},
          {name: '02/10', 単語数: 44, 感情:0.39, amt: 2400},
          {name: '02/16', 単語数: 43, 感情:0.51, amt: 2400},
          {name: '02/22', 単語数: 49, 感情:0.52, amt: 2400},
          {name: '02/26', 単語数: 48, 感情:0.56, amt: 2400},
          {name: '03/04', 単語数: 43, 感情:0.61, amt: 2400},
          {name: '03/10', 単語数: 40, 感情:0.62, amt: 2400},
          {name: '03/16', 単語数: 51, 感情:0.66, amt: 2400},
          {name: '03/22', 単語数: 52, 感情:0.59, amt: 2400},
          {name: '03/28', 単語数: 52, 感情:0.68, amt: 2400},
          {name: '04/03', 単語数: 59, 感情:0.70, amt: 2400},
          {name: '04/09', 単語数: 61, 感情:0.71, amt: 2400},

        ];
        const pieData_6 = [
          { subject: 'たべもの', A: 120, B: 110, fullMark: 150 },
          { subject: 'どうぶつ', A: 98, B: 130, fullMark: 150 },
          { subject: 'あそび', A: 86, B: 130, fullMark: 150 },
          { subject: 'かぞく', A: 99, B: 100, fullMark: 150 },
          { subject: 'のりもの', A: 85, B: 90, fullMark: 150 },
          { subject: 'かんじょう', A: 65, B: 85, fullMark: 150 },
        ];
        const pieData02_6 = [{name: 'にんげん', value: 36},
                          {name: 'いきもの', value: 18},
                         {name: 'しぜん', value: 15},
                         {name: 'のりもの', value: 9},
                         {name: 'そのた', value: 22},
                       ]
         const pieData01_6 = [{name: 'ママ', value: 32},
                           {name: 'くま', value: 21},
                          {name: 'パパ', value: 12},
                          {name: 'いえ', value: 9},
                          {name: 'ごはん', value: 17},
                        ]




    return (

      <div className="App">
        <div className="App-header">


        <Tabs>
      <Tab label="直近1ヶ月" >
        <div>
        <Row >
          <CogPieChart data ={pieData_1} data02={pieData02_1} data01={pieData01_1} />
        </Row>
        <Row >
          <CogLineChart data={lineData_1}/>
        </Row>
        </div>
      </Tab>
      <Tab label="直近3ヶ月" >
      <Row >
        <CogPieChart data ={pieData_3} data02={pieData02_3} data01={pieData01_3} />
      </Row>
      <Row >
        <CogLineChart data={lineData_3}/>
      </Row>
      </Tab>
      <Tab
        label="直近6ヶ月"
      >
      <Row >
        <CogPieChart data ={pieData_6} data02={pieData02_6} data01={pieData01_6} />
      </Row>
      <Row >
        <CogLineChart data={lineData_6}/>
      </Row>
      </Tab>
    </Tabs>


        </div>
      </div>
    );
  }
}

export default Analyze;
