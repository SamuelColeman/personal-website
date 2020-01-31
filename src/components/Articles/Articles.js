import React, { Component } from 'react';
import './Articles.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Resume from '../Resume/Resume';

export class Articles extends Component {
	render() {
		const { currentArticle } = this.props;
		return (
			<div className="articles">
				{currentArticle && currentArticle}
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
  currentArticle: state.currentArticle
});

export default connect(mapStateToProps)(Articles);