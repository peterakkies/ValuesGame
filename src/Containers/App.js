import React, { Component } from 'react';

import './App.css';
import Buckets from './Buckets';

class App extends Component {
	render() {
		document.title = 'The Values Game';
		return (
			<div className="App">
				<div className="container">
					<header>
						<h1>The Values Game</h1>
						<div id="explanation">
							<p>
								This game will help you determine what you value. We start with
								a list of 57 values. Your task is to:
								<ol>
									<li>Choose up to 25 values that you consider important.</li>
									<li>
										Choose up to ten of <em>those</em> that you consider{' '}
										<em>very</em> important.
									</li>
									<li>
										Choose the three values that are most important to you.
									</li>
								</ol>
							</p>
							<p>
								It will become increasingly difficult to choose whether you
								value one thing more than another.
							</p>
						</div>
					</header>
					<Buckets />
				</div>
				<footer>Copyright 2018 Peter Akkies.</footer>
			</div>
		);
	}
}

export default App;
