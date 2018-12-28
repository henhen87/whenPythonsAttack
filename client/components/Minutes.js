import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Minutes extends Component {
	static propTypes = {
		currentTime: PropTypes.number.isRequired,
		className: PropTypes.string
	}

	_minutes = Math.floor( (this.props.currentTime/1000/60) % 60 )

	componentDidUpdate() {
		this._minutes = Math.floor( (this.props.currentTime/1000/60) % 60 );
	}

	render = () => 
		<div className="numBox">
			<div className={this.props.className}>{this._minutes} </div>
			<span>Minutes</span>
		</div>
}

export default Minutes;
