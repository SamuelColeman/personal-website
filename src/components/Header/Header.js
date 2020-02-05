import React, { Component } from 'react';
import './Header.css';
import userImg from '../../images/userImg.jpg'

export default class Header extends Component {
	render() {
		return (
			<div className="Header">
				<img className="user_img" src={userImg} />
				<div className="name">
					<div>Samuel</div>
					<div>Coleman</div>
				</div>
				<div className="contact_info">
					<div>Software Engineer</div>
					<div>smcoleman19@gmail.com</div>
					<div>(615)734-9776</div>
					<a href={"https://alumni.turing.io/sites/default/files/resumes/SamuelColeman_Resume.pdf"}>Resume</a>
				</div>
			</div>
		)
	}
}