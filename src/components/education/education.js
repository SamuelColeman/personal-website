import React from 'react';
import './Education.css';

const Education = (education) => {

	return education.map(school => {
		return (
			<div className="Education">
				<div className="name">{school.name}</div>
				<div className="major">{school.major}</div>
				<div className="start_date">{school.start_date}</div>
				<div className="end_date">{school.end_date}</div> 
			</div>
		)	
	})
}

export default Education;