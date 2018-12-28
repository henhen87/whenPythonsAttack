import React, { Component } from 'react';
import Day from 'components/Day';
import Hour from 'components/Hour';
import Minutes from 'components/Minutes';
import Seconds from 'components/Seconds';

const NEXT_NEW_YEAR = '1/1/2019';

class Clock extends Component {
	state = {
		currentTime: null
	}

	_timerFunction = null

	componentDidMount() {
		this._timerFunction = setInterval(this.getTimeRemaining, 1000);
	}

	componentWillUnmount() {
		clearInterval(this._timerFunction);
	}
	
	getTimeRemaining = () => this.setState({ currentTime: Date.parse(NEXT_NEW_YEAR) - Date.parse(new Date()) })

	render() {
		if (!this.state.currentTime || this.state.currentTime === 0) {
			return <img src="/dist/img/python.gif" alt="###"/>;
		}

		return (
			<div className="clock">
				<h1>2019 Count Down!!</h1>
				<Day className="day" currentTime={this.state.currentTime} />
				<Hour className="hour" currentTime={this.state.currentTime} />
				<Minutes className="min" currentTime={this.state.currentTime} />
				<Seconds className="sec" currentTime={this.state.currentTime} />
			</div>
		);
	}
}

export default Clock;
