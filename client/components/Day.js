import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Day extends Component {
	static propTypes = {
		currentTime: PropTypes.number
	}

	_msecs_one_day = 1000*60*60*24
	_days = Math.floor( this.props.currentTime / (this._msecs_one_day) )

	componentDidUpdate() {
		this._days = Math.floor( this.props.currentTime / (this._msecs_one_day) );
	}


	render = () => <div>{ this._days }</div>
}

export default Day;
