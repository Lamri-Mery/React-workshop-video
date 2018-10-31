import React, { Component } from 'react';
import Myjson from '../movie.json';

export default class Jsonshow extends Component {
	render() {
		return (
			<div className="movie-container">
				{
					Myjson.movie.map(function(themovie){
						<div className="wrapper-card">
							<img src={themovie.Poster} alt=""/>

							<h3>{themovie.Title}</h3>
							<p>{themovie.Year}</p>
							<p>{themovie.Plot}</p>
						</div>
					})
				}
			</div>
		);
		// return (
		// 	<div className="movie-container">
		// 		{
		// 			Myjson.movie.map(themovie =>
		// 				<div className="wrapper-card">
		// 					<img src={themovie.Poster} alt="" />
		// 					<div>
		// 						<h3>{themovie.Title}</h3>
		// 						<h4>{themovie.Year}</h4>
		// 						<p>{themovie.Plot}</p>
		// 					</div>
		// 				</div>
		// 			)
		// 		}
		// 	</div>
		// 	);
	}
}