import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hour extends Component {
	static propTypes = {
		currentTime: PropTypes.number
	}

	_msecs_one_hour = 1000*60*60
	_hours = Math.floor( (this.props.currentTime / (this._msecs_one_hour)) % 24 )

	componentDidUpdate() {
		this._hours = Math.floor( (this.props.currentTime / (this._msecs_one_hour)) % 24 );
	}

	render = () => <div>{this._hours}</div>
}

export default Hour;
