import React, { Component } from 'react';
// import logo from './logo.svg';
// import Nom_Du_Module_Sans_Le_JS from './compenent/NomDuMonduleSansLeJS';
import './App.css';
// Pour faire les liens dans le boutton
import {
  Link
} from 'react-router-dom';
import Linkbutton from './compenent/Linkbutton';

class Homepage extends Component {
  render() {
    return (
      <Linkbutton />
    );
  }
}

export default Homepage;
