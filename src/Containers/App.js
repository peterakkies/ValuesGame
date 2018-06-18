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
					<p>This game will help you determine what you value.</p>
					<p>
						We start with a list of 57 values. You choose a subset of these that
						you consider important. Then, you choose a subset of those that you
						consider very important. Finally, you choose the three values that
						are most important to you.
					</p>
					<p>
						You'll find that it will become increasingly difficult to choose
						whether you value one thing more than another.
					</p>
					<Buckets />
				</div>
			</div>
		);
	}
}

export default App;
