import React, { Component } from 'react';
// import logo from './logo.svg';
// import Nom_Du_Module_Sans_Le_JS from './compenent/NomDuMonduleSansLeJS';
import './App.css';
import {
  Link
} from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <from>
            <Link to="/movie">
              <button className="home-button">
                  Afficher
              </button>
            </Link>
          </from>
        </div>
      </div>
    );
  }
}

export default Homepage;
