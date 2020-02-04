import React, { Component } from 'react';
import './Resume.css';
import resumeImg from '../../images/resumeImg.png'

export default class Resume extends Component {
	render() {
		return (
			<div className="Resume">
				<img className="resume-img" src={resumeImg} />
			</div>
		)
	}
}