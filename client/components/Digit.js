import React from 'react';
import PropTypes from 'prop-types';

// const splitDigit = (digit) => String(digit).split('');

export const Digit = ({flip, digit, ...props}) => { 
	console.log('FLIP FIRST DIGT', flip)
	return (
		<div className="numBox">
			<div className="num">
				<div className="top-container">
					<h1>{String(digit).length === 1 ? `0${digit - 1}` : digit - 1}</h1>
					<div className={`top ${flip && 'flip'}`}><h1>{String(digit).length === 1 ? `0${digit}` : digit}</h1></div>
				</div>
				<div className="bottom-container">
					<h1>{String(digit).length === 1 ? `0${digit - 1}` : digit - 1}</h1>
					<div className={`bottom ${flip && 'flip'}`}>
						<h1>{String(digit).length === 1 ? `0${digit}` : digit}</h1>
						<h1>{String(digit).length === 1 ? `0${digit - 1}` : digit - 1}</h1>
					</div>
				</div>
			</div>
			<div className="label">{props.label}</div>
		</div>
	);
}

Digit.propTypes = {
	flip: PropTypes.bool,
	digit: PropTypes.number.isRequired,
	className: PropTypes.string,
	label: PropTypes.string.isRequired
};
