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

	_seconds = null 
	_minutes = null 
	_hours = null 
	_days = null 

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
	getHours = () => Math.floor( (this.props.currentTime / (this.MILLI_SECS_HOUR)) % 24 )
	getDays = () => Math.floor( this.props.currentTime / (this.MILLI_SECS_DAY) )

	render() {
		return (
			<div>
				<div className="days-box">
					<Digit className="day" digit={this._days} />
					<div className="label">Days</div>
				</div>
				<div className="hours-box">
					<Digit 
						className="hour" 
						flipFirstDigit={(this._minutes === 0)} 
						digit={this._hours} />
					<div className="label">Hours</div>
				</div>
				<div className="mins-box">
					<Digit 
						className="min" 
						flipFirstDigit={(this._seconds === 0)}
						digit={this._minutes} />
					<div className="label">Minutes</div>
				</div>
				<div className="secs-box">
					<Digit 
						className="sec" 
						flipFirstDigit={(this._seconds <= 1)}
						digit={this._seconds} />
					<div className="label">Seconds</div>
				</div>
			</div>
		);
	}
}

export default Time;
