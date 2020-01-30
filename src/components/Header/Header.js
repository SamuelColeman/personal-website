import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="name">
					<div>Samuel</div>
					<div>Coleman</div>
				</div>
				<div className="contact_info">
					<div>smcoleman19@gmail.com</div>
					<div>(615)734-9776</div>
				</div>
			</div>
		)
	}
}