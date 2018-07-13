import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => (
	<div id="introduction">
		<h2>What&apos;s most important to you?</h2>

		<p>
			This game will help you determine what you value most. Here&apos;s how:
		</p>
		<ul>
			<li>
				<strong>Drag and drop</strong> values from one bucket to another.
			</li>
			<li>
				Note that you can only fit a certain number of values in each bucket.
			</li>
			<li>
				Work in steps. Ask: what&apos;s important? Then ask: what&apos;s very
				important?
			</li>
		</ul>
		<p>
			Have fun! <br />
			— Peter Akkies
		</p>
		<Link to="/step-one/">
			<button type="button">Get started</button>
		</Link>
	</div>
);

export default Introduction;
