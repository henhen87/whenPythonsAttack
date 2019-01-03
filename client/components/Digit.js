import React from 'react';
import PropTypes from 'prop-types';

export const Digit = ({flip, flipSecsBot, digit, ...props}) => {
	console.log('FLIP', flip)
	return (
		<div className="numBox">
			<div className="num">
				<div className="top-container">
					<h1>{digit - 1}</h1>
					<div className={`top ${flip === true ? 'flip' : ''}`}><h1>{digit}</h1></div>
				</div>
				<div className="bottom-container">
					<h1 className={flipSecsBot === false ? 'show' : 'hide'}>{digit + 1}</h1>
					<div className={`bottom ${flipSecsBot === true ? 'flip' : ''}`}>
						<h1>{digit}</h1>
					</div>
				</div>
			</div>
			<div className="label">{props.label}</div>
		</div>
	);
};

Digit.propTypes = {
	flip: PropTypes.bool,
	flipSecsBot: PropTypes.bool,
	digit: PropTypes.number.isRequired,
	className: PropTypes.string,
	label: PropTypes.string.isRequired,
};
