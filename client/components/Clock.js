import React, { Component } from 'react';

import Time from 'components/Time';

const NEXT_NEW_YEAR = '1/1/2020';

class Clock extends Component {
	state = {
		currentTime: null
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ 
				currentTime: Date.parse(NEXT_NEW_YEAR) - Date.parse(new Date()) 
			});
		}, 3000);
	}

	render() {
		if (!this.state.currentTime || this.state.currentTime === 0) {
			return <img id="loader" src="/dist/img/loader.gif" alt="###"/>;
		}

		return (
			<div className="clock">
				<Time  currentTime={this.state.currentTime} />
			</div>
		);
	}
}

export default Clock;
