import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Digit } from 'components/Digit';

const MILLI_SECS_HOUR = 1000*60*60;
const MILLI_SECS_DAY = 1000*60*60*24;


class Time extends Component {
	static propTypes = {
		currentTime: PropTypes.number.isRequired
	};

	// state = {
	// 	flipTensDigit: false,
	// 	flipOnesDigit: false
	// }

	_seconds = 0 
	_minutes = 0 
	_hours = 0 
	_days = 0 

	componentDidMount() {
		this.initializeTime();
	}

	componentDidUpdate() {
		this.initializeTime();
	} 

	initializeTime = () => {
		this._seconds = this.getSeconds();
		this._minutes = this.getMinuntes();
		this._hours = this.getHours();
		this._days = this.getDays();

		console.log('SECS SPLIT', String(this._seconds).split('')[1]);
		console.log('MINS', this._minutes);
		console.log('HOURS', this._hours);
		console.log('DAYS', this._days);
	}

	getSeconds = () => Math.floor( (this.props.currentTime/1000) % 60 )
	getMinuntes = () => Math.floor( (this.props.currentTime/1000/60) % 60 )
	getHours = () => Math.floor( (this.props.currentTime / (MILLI_SECS_HOUR)) % 24 )
	getDays = () => Math.floor( this.props.currentTime / (MILLI_SECS_DAY) )

	render() {
		return (
			<div>
				<Digit className="day" digit={this._days} label="Days" />
				<Digit 
					className="hour" 
					flipFirstDigit={(this._minutes === 0)} 
					digit={this._hours} label="Hours" />
				<Digit 
					className="min" 
					flipFirstDigit={(this._seconds === 0)}
					digit={this._minutes} label="Minutes" />
				<Digit 
					className="sec" 
					flipFirstDigit={(this._seconds <= 1)}
					digit={this._seconds} label="Seconds" />
			</div>
		);
	}
}

export default Time;
