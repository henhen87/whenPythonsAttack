import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Day extends Component {
	static propTypes = {
		currentTime: PropTypes.number,
		newYearTime: PropTypes.number
	}

	render() {
		console.log('DAY', this.props.newYearTime);
		return (
			<div>
				Hi
			</div>
		);
	}
}

export default Day;
