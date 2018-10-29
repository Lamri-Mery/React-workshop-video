import React, { Component } from 'react';
// import logo from './logo.svg';
// import Nom_Du_Module_Sans_Le_JS from './compenent/NomDuMonduleSansLeJS';
import './App.css';
// Creer le routeur
import {
BrowserRouter as Router,
Route
} from 'react-router-dom';
import homepage from './homepage';
import showcard from './showcard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={homepage}/>
            <Route exact path='/accueil' component={homepage}/>
            <Route exact path='/movie' component={showcard}/>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
