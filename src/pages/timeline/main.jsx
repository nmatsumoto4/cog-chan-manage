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
import axios from 'axios'

class Timeline extends Component {



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

    console.log(this.props.talkLogs);


    return (
      <div className="App">
        <div className="App-header">
          <h2>タカシ君のつぶやき集</h2>
          <div style={styles.root}>
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >
              {tilesData.map((tile) => (
                <GridTile
                  cols={1}
                  key={tile.img}
                  title={tile.title}
                  subtitle={<span>by <b>{tile.author}</b></span>}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>
          </div>

        </div>
      </div>
    );
  }
}


export default Timeline;
