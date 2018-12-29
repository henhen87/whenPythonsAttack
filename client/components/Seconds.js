import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Time } from 'components/Time';

class Seconds extends Component {
	static propTypes = {
		currentTime: PropTypes.number.isRequired,
		className: PropTypes.string
	}

	_seconds = Math.floor( (this.props.currentTime/1000) % 60 )
	_addBackClass = false

	componentDidUpdate() {
		this._seconds = Math.floor( (this.props.currentTime/1000) % 60 );
		this._addBackClass = !this._addBackClass;
	}

	render = () => 
		<Time 
			time={this._seconds} addBackClass={this._addBackClass} className={this.props.className} label='Seconds' />
}

export default Seconds;
