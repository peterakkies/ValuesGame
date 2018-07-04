import React from "react";

import "./App.css";
import Buckets from "./Buckets";

const App = () => (
	<div className="App">
		<div className="container">
			<header>
				<h1>The Values Game</h1>
				<h2>What&apos;s most important to you?</h2>
				<div id="explanation">
					<p>
						This game will help you determine what you value most. Here&apos;s
						how:
					</p>
					<ul>
						<li>
							<strong>Drag and drop</strong> values from one bucket to another.
						</li>
						<li>
							Note that you can only fit a certain number of values in each
							bucket.
						</li>
						<li>
							Work in steps. Ask: what&apos;s important? Then ask: what&apos;s
							very important?
						</li>
					</ul>
					<p>
						Have fun! <br />
						— Peter Akkies
					</p>
				</div>
			</header>
			<Buckets />
			<footer>
				Copyright 2018 <a href="https://peterakkies.net">Peter Akkies</a>. Have
				a suggestion for improvement?
				<a href="mailto:peter@peterakkies.net">Email me</a>!
			</footer>
		</div>
	</div>
);

export default App;
