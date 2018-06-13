import React, { Component } from 'react';
import './App.css';

import Buckets from '../Buckets/Buckets.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<header>
						<h1>The Values Game</h1>
					</header>
					<Buckets />
				</div>
			</div>
		);
	}
}

export default App;
