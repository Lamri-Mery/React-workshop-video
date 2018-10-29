import React, { Component } from 'react';
// import logo from './logo.svg';
// import Nom_Du_Module_Sans_Le_JS from './compenent/NomDuMonduleSansLeJS';
import './App.css';
import Myjson from './movie.json';

class Showcard extends Component {
  render() {
    return (
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
    );
  }
}

export default Showcard;
