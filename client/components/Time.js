import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Digit } from 'components/Digit';

class Time extends Component {
	static propTypes = {
		currentTime: PropTypes.number.isRequired
	};

	_msecs_one_hour = 1000*60*60
	_msecs_one_day = 1000*60*60*24
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

		console.log('SECS', this._seconds);
		console.log('MINS', this._minutes);
		console.log('HOURS', this._hours);
		console.log('DAYS', this._days);
	}

	getSeconds = () => Math.floor( (this.props.currentTime/1000) % 60 )
	getMinuntes = () => Math.floor( (this.props.currentTime/1000/60) % 60 )
	getHours = () => Math.floor( (this.props.currentTime / (this._msecs_one_hour)) % 24 )
	getDays = () => Math.floor( this.props.currentTime / (this._msecs_one_day) )

	render() {
		return (
			<div>
				<div className="days-box">
					<Digit className="day" digit={this._days} />
					<span>Days</span>
				</div>
				<div className="hours-box">
					<Digit className="hour" flipFirstDigit={(this._minutes === 0)} digit={this._hours} />
					<span>Hours</span>
				</div>
				<div className="mins-box">
					<Digit className="min" flipFirstDigit={(this._seconds === 0)} digit={this._minutes} />
					<span>Minutes</span>
				</div>
				<div className="secs-box">
					<Digit className="sec" digit={this._seconds} />
					<span>Seconds</span>
				</div>
			</div>
		);
	}
}

export default Time;
