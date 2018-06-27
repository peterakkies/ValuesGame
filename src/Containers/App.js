import React, { Component } from 'react';

import './App.css';
import Buckets from './Buckets';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<header>
						<h1>The Values Game</h1>
						<h2>{`What's important to you?`}</h2>
						<div id="explanation">
							<p>This game will help you determine what you value most.</p>
							<p>
								You begin with a list of 57 values. In three rounds, you will
								narrow down the list based on which values you consider more
								important than others.
							</p>
							<p>
								To move a value, just drag it to the next column ({`"bucket"`}).
							</p>
							<p>
								Each bucket shows how many values it currently holds. When you
								fill a bucket up, the next bucket will appear. You finish with
								the three values that are most important to you.
							</p>
							<p>
								Have fun! <br />
								— Peter Akkies
							</p>
						</div>
					</header>
					<Buckets />
					<footer>
						Copyright 2018 <a href="https://peterakkies.net">Peter Akkies</a>.
						Have a suggestion for improvement?{' '}
						<a href="mailto:peter@peterakkies.net">Email me</a>!
					</footer>
				</div>
			</div>
		);
	}
}

export default App;
