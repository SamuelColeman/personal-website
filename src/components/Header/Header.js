import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div className="name">Samuel Coleman</div>
				<div className="title">Software Engineer</div>
			</div>
		)
	}
}