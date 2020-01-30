import React, { Component } from 'react';
import './Navigation.css';

export default class Navigation extends Component {
	render() {
		return (
			<div className="navigation">
				<button className="nav-btn">Resume</button>
				<button className="nav-btn">About Me</button>
				<button className="nav-btn">Projects</button>
				<button className="nav-btn">Experience</button>
			</div>
		)
	}
}