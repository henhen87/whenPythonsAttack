import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Seconds extends Component {
	static propTypes = {
		currentTime: PropTypes.number,
		newYearTime: PropTypes.number
	}

	render() {
		console.log('Seconds', this.props.currentTime);
		return (
			<div>
				Elenaaaa
			</div>
		);
	}
}

export default Seconds;
