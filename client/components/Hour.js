import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hour extends Component {
	static propTypes = {
		currentTime: PropTypes.number,
		newYearTime: PropTypes.number
	}

	render() {
		console.log('HOUR', this.props.currentTime);
		return (
			<div>
				Elena
			</div>
		);
	}
}

export default Hour;
