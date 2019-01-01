import React from 'react';
import PropTypes from 'prop-types';

// const splitDigit = (digit) => String(digit).split('');

export const Digit = ({flipFirstDigit, digit, ...props}) => { 
	console.log('FLIP FIRST DIGT', flipFirstDigit)
	return (
		<div className="numBox">
			<div className="num">
				<div className="top-container">
					<h1>{String(digit).length === 1 ? `0${digit}` : digit}</h1>
					<div className="top"><h1>{String(digit).length === 1 ? `0${digit}` : digit}</h1></div>
				</div>
				<div className="bottom-container">
					<h1>{String(digit).length === 1 ? `0${digit}` : digit}</h1>
					<div className="bottom"><h1>{String(digit).length === 1 ? `0${digit}` : digit}</h1></div>
				</div>
			</div>
			<div className="label">{props.label}</div>
		</div>
	);
}

Digit.propTypes = {
	flipFirstDigit: PropTypes.bool,
	digit: PropTypes.number.isRequired,
	className: PropTypes.string,
	label: PropTypes.string.isRequired
};
