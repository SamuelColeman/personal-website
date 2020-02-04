import React, { Component } from 'react';
import './Articles.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Resume from '../Resume/Resume';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';

export class Articles extends Component {
	render() {
		const options = {
			Resume,
			AboutMe,
			Projects,
			Experience
		}
		const CurrentArticle = options[this.props.currentArticle];
		return (
			<div className="Articles">
				{CurrentArticle && <CurrentArticle />}
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
  currentArticle: state.currentArticle
});

export default connect(mapStateToProps)(Articles);