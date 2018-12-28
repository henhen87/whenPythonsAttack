import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Minutes extends Component {
	static propTypes = {
		currentTime: PropTypes.number
	}

	_minutes = Math.floor( (this.props.currentTime/1000/60) % 60 )

	componentDidUpdate() {
		this._minutes = Math.floor( (this.props.currentTime/1000/60) % 60 );
	}

	render = () => <div>{this._minutes}</div>
}

export default Minutes;
