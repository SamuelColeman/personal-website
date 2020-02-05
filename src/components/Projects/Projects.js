import React, { Component } from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';

export default class Projects extends Component {
	render() {
		return (
			<div className="Projects">
				<ProjectCard />
			</div>
		)
	}
}