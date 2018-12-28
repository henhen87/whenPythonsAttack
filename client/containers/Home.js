import React, { Component } from 'react';
import style from '../sass/index.scss';

import Clock from 'components/Clock';

console.log('STYLE', style);

class Home extends Component {
	render = () => {
		return (
			<div id="home">
				<Clock />
			</div>
		);
	}
}

export default Home;
