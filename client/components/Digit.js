import React from 'react';
import PropTypes from 'prop-types';

export const Digit = ({flip, flipSecsBot, digit, ...props}) => {
	return (
		<div className="numBox">
			<div className="num">
				{/*<div id="backTop">
					<h1 className="backNum">{digit - 1}</h1>
				</div>
				<div id="backBot">
					<h1 className={flipSecsBot === false ? 'backNum show' : 'backNum hide'}>{digit + 1}</h1>
				</div>*/}
				<div className={`top-container ${flip === true ? 'flip' : ''}`}>
					<div className={`top`}><h1>{digit}</h1></div>
				</div>
				<div className={`bottom-container ${flipSecsBot === true ? 'flip' : ''}`}>
					<div className={`bottom`}>
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
