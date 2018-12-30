import React from 'react';
import PropTypes from 'prop-types';

const splitDigit = (digit) => String(digit).split('');

export const Digit = ({flipFirstDigit, digit, ...props}) =>{ 
	console.log('FLIP FIRST DIGT', flipFirstDigit)
	return (
		<div className="numBox">
			<div className="num">
				{/*<div className="forever-time">{time}</div>*/}
				<div className={`${props.className} ${flipFirstDigit ? "back" : ""} first-digit`}>{splitDigit(digit)[0]}</div>
				<div className={props.className  + " back second-digit"}>{splitDigit(digit)[1]}</div>
			</div>
		</div>
	);
}

Digit.propTypes = {
	flipFirstDigit: PropTypes.bool,
	digit: PropTypes.number.isRequired,
	className: PropTypes.string
};
