import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Seconds extends Component {
	static propTypes = {
		currentTime: PropTypes.number
	}

	_seconds = Math.floor( (this.props.currentTime/1000) % 60 )

	componentDidUpdate() {
		this._seconds = Math.floor( (this.props.currentTime/1000) % 60 );
	}

	render = () => <div>{this._seconds}</div>
}

export default Seconds;
