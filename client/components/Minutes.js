import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Minutes extends Component {
	static propTypes = {
		currentTime: PropTypes.number,
		newYearTime: PropTypes.number
	}

	render() {
		console.log('Minutes', this.props.currentTime);
		return (
			<div>
				Elenaa
			</div>
		);
	}
}

export default Minutes;
