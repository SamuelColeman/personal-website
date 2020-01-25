import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="name">Samuel Coleman</div>
				<div className="nav-container">
					<button className="nav-btn">My Story</button>
					<button className="nav-btn">Projects</button>
					<button className="nav-btn">Experience</button>
				</div>
			</div>
		)
	}
}