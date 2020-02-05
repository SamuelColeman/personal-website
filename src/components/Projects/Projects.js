import React, { Component } from 'react';
import './Projects.css';
import Linkify from 'react-linkify';

export default class Projects extends Component {
	render() {
		return (
			<div className="Projects">
				<div className="project-title">PupDates</div>
				<Linkify>https://github.com/PupDates-CrossPol</Linkify>
			</div>
		)
	}
}