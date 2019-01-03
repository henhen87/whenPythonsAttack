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
		flipSecsBot: false
	}

	_botNumIntervalFunc = null
	_initTimeIntervalFunc = null

	_seconds = 0 
	_minutes = 0 
	_hours = 0 
	_days = 0 

	componentDidMount() {
		this._initTimeIntervalFunc == setInterval(this.initializeTime, 1000);
		this._botNumIntervalFunc = setInterval(this.setFlipSecs, 500);
	}

	componentWillUnmount() {
		clearInterval(this._initTimeIntervalFunc);
		clearInterval(this._botNumIntervalFunc);
	}

	setFlipSecs = () => this.setState({ 
			flipSecs: !this.state.flipSecs 
		}, () => setTimeout(() => {
			this.setState({ flipSecsBot: !this.state.flipSecsBot })
	}, 500))

	initializeTime = () => {
		this._seconds = this.getSeconds();
		this._minutes = this.getMinuntes();
		this._hours = this.getHours();
		this._days = this.getDays();
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
					flip={(this._minutes === 0)} 
					digit={this._hours} label="Hours" />
				<Digit 
					className="min" 
					flip={(this._seconds === 0)}
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
