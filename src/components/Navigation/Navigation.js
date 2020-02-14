import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Navigation.css';
import { updateArticle } from '../../actions';
import { getProjects, getSchools } from '../../apiCalls';

export class Navigation extends Component {
	constructor() {
		super();
		this.state = {
			projects: [],
			education: []
		}
	}

	handleChange = async (e) => {
		const { updateArticle } = this.props;
		updateArticle(e.target.value);
		if (e.target.value === "Projects") {
			const projects = await getProjects();
			this.setState({ projects });
		} else if (e.target.value === "Education") {
			const education = await getSchools();
			this.setState({ education });
		}
		console.log(this.state)
	}

	render() {
		return (
			<div className="Navigation">
				<button className="nav-btn" value="AboutMe" onClick={this.handleChange}>About Me</button>
				<button className="nav-btn" value="Projects" onClick={this.handleChange}>Projects</button>
				<button className="nav-btn" value="Skills" onClick={this.handleChange}>Skills</button>
				<button className="nav-btn" value="Education" onClick={this.handleChange} education={this.state.education}>Education</button>
				<button className="nav-btn" value="Experience" onClick={this.handleChange}>Experience</button>
				<button className="nav-btn" value="ContactInfo" onClick={this.handleChange}>Contact</button>
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
  currentArticle: state.currentArticle
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    updateArticle
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);