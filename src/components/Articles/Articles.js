import React, { Component } from 'react';
import './Articles.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Header from '../Header/Header';

export class Articles extends Component {
	render() {
		const options = {
			Skills,
			Education,
			AboutMe,
			Projects,
			Experience
		}
		const CurrentArticle = options[this.props.currentArticle];
		return (
			<div className="Articles">
				<Header />
				<AboutMe />
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
  currentArticle: state.currentArticle
});

export default connect(mapStateToProps)(Articles);