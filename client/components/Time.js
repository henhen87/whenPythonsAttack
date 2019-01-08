import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Digit } from 'components/Digit';

const MILLI_SECS_HOUR = 1000*60*60;
const MILLI_SECS_DAY = 1000*60*60*24;


class Time extends Component {
	static propTypes = {
		currentTime: PropTypes.number.isRequired
	};

	state = {
		flipSecs: false,
		flipSecsBot: false,
		flipSecsMin: false,
	}

	_botNumIntervalFunc = null
	_initTimeIntervalFunc = null

	_seconds = Math.floor( (this.props.currentTime/1000) % 60 )
	_minutes = Math.floor( (this.props.currentTime/1000/60) % 60 )
	_hours = Math.floor( (this.props.currentTime / (MILLI_SECS_HOUR)) % 24 ) 
	_days = Math.floor( this.props.currentTime / (MILLI_SECS_DAY) )

	componentDidMount() {
		this._initTimeIntervalFunc == setInterval(this.initializeTime, 1000);
		this._botNumIntervalFunc = setInterval(this.setFlipSecs, 750);
	}

	componentWillUnmount() {
		clearInterval(this._initTimeIntervalFunc);
		clearInterval(this._botNumIntervalFunc);
	}

	setFlipSecs = () => this.setState({ 
			flipSecs: !this.state.flipSecs 
		}, () => setTimeout(() => {
			this.setState({ flipSecsBot: !this.state.flipSecsBot });
	}, 750))

	initializeTime = () => {
		this._seconds = this.getSeconds();
	}

	getSeconds = () => {
		if (this._seconds === 0) {
			this._minutes = this.getMinuntes();
			return 59;
		} else {
			return this._seconds - 1;
		}
	}
	getMinuntes = () => {
		if (this._minutes === 0) {
			this._hours = this.getHours();
			return 59;
		} else {
			return this._minutes - 1;
		}
	}
	getHours = () => {
		if (this._hours === 0) {
			this._days = this.getDays();
			return 24;
		} else {
			return this._hours - 1
		}
	}
	getDays = () => {
		if (this._days === 0) {
			return 365;
		} else {
			return this._days - 1;
		}
	}

	render() {
		return (
			<div>
				<Digit className="day" digit={this._days} label="Days" />
				<Digit 
					className="hour" 
					flip={(this._minutes === 0)} 
					digit={this._hours} label="Hours" />
				<Digit 
					className="min" 
					flip={(this._seconds === 0)}
					flipSecsBot={this._seconds === 0}
					digit={this._minutes} label="Minutes" />
				<Digit 
					className="sec" 
					flip={this.state.flipSecs}
					flipSecsBot={this.state.flipSecsBot}
					digit={this._seconds} label="Seconds" />
			</div>
		);
	}
}

export default Time;
