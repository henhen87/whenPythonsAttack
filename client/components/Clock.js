import React, { Component } from 'react';
import Day from 'components/Day';
import Hour from 'components/Hour';
import Minutes from 'components/Minutes';
import Seconds from 'components/Seconds';

class Clock extends Component {
	state = {
		currentTime: Date.now(),
		newYearTime: (Date.now() - (Date.now() - 31540000000))
	}

	render() {
		return (
			<div>
				<Day currentTime={this.state.currentTime} newYearTime={this.state.newYearTime}/>
				<Hour currentTime={this.state.currentTime} newYearTime={this.state.newYearTime}/>
				<Minutes currentTime={this.state.currentTime} newYearTime={this.state.newYearTime}/>
				<Seconds currentTime={this.state.currentTime} newYearTime={this.state.newYearTime}/>
			</div>
		);
	}
}

export default Clock;
