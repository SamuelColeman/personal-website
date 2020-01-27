import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="name">Samuel Coleman</div>
				<div className="contact_info">
					<div>smcoleman19@gmail.com</div>
					<div>(615)734-9776</div>
					<div>Resume</div>
				</div>
			</div>
		)
	}
}