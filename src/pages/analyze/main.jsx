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




    return (

      <div className="App">
        <div className="App-header">


        <Tabs>
      <Tab label="会話記録" >
        <div>
        <Row >
          <CogLineChart/>

        </Row>
        </div>
      </Tab>
      <Tab label="傾向" >
        <CogRader />
      </Tab>
      <Tab
        label="onActive"
      >
        <div>
          <h2 >Tab Three</h2>
          <p>
            This is a third example tab.
          </p>
        </div>
      </Tab>
    </Tabs>


        </div>
      </div>
    );
  }
}

export default Analyze;
