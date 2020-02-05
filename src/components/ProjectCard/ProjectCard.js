import React, { Component } from 'react';
import './ProjectCard.css';

export default class ProjectCard extends Component {
	render() {
		return (
			<div className="ProjectCard">
				<div className="project-title">PupDates</div>
				<a className="project-link" href={"https://github.com/PupDates-CrossPol"}>GitHub</a>
			</div>
		)
	}
}