import React, { Component } from 'react';
import Day from 'components/Day';
import Hour from 'components/Hour';
import Minutes from 'components/Minutes';
import Seconds from 'components/Seconds';

const newYear = '1/1/2019';
// const t = Date.parse(newYear) - Date.parse(new Date());
// console.log('TOTAL', t);
// const seconds = Math.floor( (t/1000) % 60 );
// console.log('SECONDS', seconds);
// const minutes = Math.floor( (t/1000/60) % 60 );
// console.log('MINUTES', minutes);
// const hours = Math.floor( (t/(1000*60*60)) % 24 );
// console.log('HOURS', hours);
// const days = Math.floor( t/(1000*60*60*24) );
// console.log('DAYS', days);

class Clock extends Component {
	state = {
		currentTime: null
	}

	timerFunction = null

	componentDidMount() {
		this.timerFunction = setInterval(this.getTimeRemaining, 1000);
	}
	
	getTimeRemaining = () => this.setState({ currentTime: Date.parse(newYear) - Date.parse(new Date()) })

	render() {
		return (
			<div>
				<Day currentTime={this.state.currentTime} />
				<Hour currentTime={this.state.currentTime} />
				<Minutes currentTime={this.state.currentTime} />
				<Seconds currentTime={this.state.currentTime} />
			</div>
		);
	}
}

export default Clock;
