import React, { Component } from 'react';
import './ProjectCard.css';
import pupdatesGif from '../../images/pupdatesGif.mov';

const ProjectCard = () => {
	
	return (
		<div className="ProjectCard">
			<div className="project-title">PupDates</div>
			<a className="project-link" href={"https://github.com/PupDates-CrossPol"}>GitHub</a>
			<video className="project-gif" autoPlay="" loop="" muted="" data-reactid=".0.1.0.0">
				<source src={pupdatesGif} type="video/mov" data-reactid=".0.1.0.0.0"/>
			</video>
		</div>
	)
}

export default ProjectCard;