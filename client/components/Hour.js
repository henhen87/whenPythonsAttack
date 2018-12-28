import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hour extends Component {
	static propTypes = {
		currentTime: PropTypes.number.isRequired,
		className: PropTypes.string
	}

	_msecs_one_hour = 1000*60*60
	_hours = Math.floor( (this.props.currentTime / (this._msecs_one_hour)) % 24 )

	componentDidUpdate() {
		this._hours = Math.floor( (this.props.currentTime / (this._msecs_one_hour)) % 24 );
	}

	render = () => 
		<div className="numBox">
			<div className={this.props.className}>{this._hours} </div>
			<span>Hours</span>
		</div>
}

export default Hour;
