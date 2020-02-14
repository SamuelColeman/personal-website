import React, { Component } from 'react';
import './AboutMe.css';
import userImg from '../../images/userImg.jpg'

export default class AboutMe extends Component {
	render() {
		return (
			<div className="AboutMe">
				<div className="contact_info">
					<img className="user_img" src={userImg} />
					<div className="user_info">
						<div className="info_title">Contact Info:</div>
						<div>smcoleman19@gmail.com</div>
						<div>(615)734-9776</div>
						<a href={"https://alumni.turing.io/sites/default/files/resumes/SamuelColeman_Resume.pdf"}>Resume</a>
					</div>
				</div>
			</div>
		)
	}
}