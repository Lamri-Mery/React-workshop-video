import React, { Component } from 'react';

export default class Linkbutton extends Component {
  render() {
    return (
		<div className="App">
			<from>
				<Link to="/movie">
					<button className="home-button">
						Afficher
					</button>
				</Link>
			</from>
		</div>
    );
  }
}