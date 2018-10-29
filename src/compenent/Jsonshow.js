import React, { Component } from 'react';
import Myjson from './movie.json';

export default class Jsonshow extends Component {
  render() {
  	<div className="App">
        <div className="search">
          {
            Myjson.movie.map(function(mymovie){
              return (
                <div className="wrapper-card">
                    <img src={mymovie.Poster} alt=""/>
                    
                    <h3>{mymovie.Title}</h3>
                    <p>{mymovie.Year}</p>
                    <p>{mymovie.Plot}</p>
                </div>
              );
            })
          }
        </div>
      </div>
  }
}