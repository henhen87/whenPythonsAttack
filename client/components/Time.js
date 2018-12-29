import React from 'react';
import PropTypes from 'prop-types';

export const Time = ({ time, label, ...props }) => (
	<div className="numBox">
		<div className={`flip-box ${props.addBackClass ? 'back' : ''}`}>
			<div className={props.className}>{time}</div>
		</div>
		<span>{label}</span>
	</div>
);

Time.propTypes = {
	time: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
	className: PropTypes.string,
	addBackClass: PropTypes.bool.isRequired
};
