import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Seconds extends Component {
	static propTypes = {
		currentTime: PropTypes.number.isRequired,
		className: PropTypes.string
	}

	_seconds = Math.floor( (this.props.currentTime/1000) % 60 )

	componentDidUpdate() {
		this._seconds = Math.floor( (this.props.currentTime/1000) % 60 );
	}

	render = () => 
		<div className="numBox">
			<div className={this.props.className}>{this._seconds}</div> 
			<span>Seconds</span>
		</div>
}

export default Seconds;
