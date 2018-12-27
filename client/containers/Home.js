import React, { Component } from 'react';
import style from '../sass/index.scss';

import Clock from 'components/Clock';

console.log('STYLE', style);

class Home extends Component {
	render() {
		return (
			<div>
				ELENA
				<img src="/dist/img/python.gif" alt="<333 Elena"/>
				<Clock />
			</div>
		);
	}
}

export default Home;
