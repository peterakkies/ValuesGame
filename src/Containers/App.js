import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";

import Buckets from "./Buckets";
import Introduction from "../components/Introduction";

import "./App.css";

const App = () => (
	<div className="App">
		<div className="container">
			<header>
				<h1>
					<Link to="/">The Values Game</Link>
				</h1>
			</header>
			<Route path="/" exact component={Introduction} />
			<Route path="/step-one/" component={Buckets} />
			<footer>
				Copyright 2018 <a href="https://peterakkies.net">Peter Akkies</a>. Have
				a suggestion for improvement?{" "}
				<a href="mailto:peter@peterakkies.net">Email me</a>!
			</footer>
		</div>
	</div>
);

export default App;
