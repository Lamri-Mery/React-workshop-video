import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export default class Linkbutton extends Component {
	render() {
	    return (
				<from>
					<Link to="/movie">
						<button className="home-button">
							Afficher
						</button>
					</Link>
				</from>
		);
	}
}