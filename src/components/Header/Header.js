import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
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