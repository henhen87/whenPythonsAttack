import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Day extends Component {
	static propTypes = {
		currentTime: PropTypes.number.isRequired,
		className: PropTypes.string
	}

	_msecs_one_day = 1000*60*60*24
	_days = Math.floor( this.props.currentTime / (this._msecs_one_day) )

	componentDidUpdate() {
		this._days = Math.floor( this.props.currentTime / (this._msecs_one_day) );
	}


	render = () => 
		<div className="numBox">
			<div className={this.props.className}>{ this._days } </div>
			<span>Days</span>
		</div>
}

export default Day;
