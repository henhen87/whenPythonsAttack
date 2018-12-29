import React from 'react';
import PropTypes from 'prop-types';

export const Time = ({ time, label, ...props }) => (
	<div className="numBox">
		<div className={props.className}>{time}</div> 
		<span>{label}</span>
	</div>
);

Time.propTypes = {
	time: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
	className: PropTypes.string
};
