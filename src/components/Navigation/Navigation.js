import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Navigation.css';
import { updateArticle } from '../../actions';
import Resume from '../Resume/Resume';

export class Navigation extends Component {

	handleChange = (e) => {
		const { updateArticle } = this.props;
		updateArticle(e.target.value);
	}

	render() {
		return (
			<div className="Navigation">
				<button className="nav-btn" value="Resume" onClick={this.handleChange}>Resume</button>
				<button className="nav-btn" value="AboutMe" onClick={this.handleChange}>About Me</button>
				<button className="nav-btn" value="Projects" onClick={this.handleChange}>Projects</button>
				<button className="nav-btn" value="Experience" onClick={this.handleChange}>Experience</button>
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