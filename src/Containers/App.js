import React, { Component } from 'react';
import './App.css';

import Buckets from '../Buckets/Buckets.js';

class App extends Component {
	/* 
		We will keep track of which values belong to which bucket using state.
		List of values from James Clear.
	 */
	state = {
		values: [
			{ title: 'Authenticity', bucketKey: 1 },
			{ title: 'Achievement', bucketKey: 1 },
			{ title: 'Adventure', bucketKey: 1 },
			{ title: 'Authority', bucketKey: 1 },
			{ title: 'Autonomy', bucketKey: 1 },
			{ title: 'Balance', bucketKey: 1 },
			{ title: 'Beauty', bucketKey: 1 },
			{ title: 'Boldness', bucketKey: 1 },
			{ title: 'Compassion', bucketKey: 1 },
			{ title: 'Challenge', bucketKey: 1 },
			{ title: 'Citizenship', bucketKey: 1 },
			{ title: 'Community', bucketKey: 1 },
			{ title: 'Competency', bucketKey: 1 },
			{ title: 'Contribution', bucketKey: 1 },
			{ title: 'Creativity', bucketKey: 1 },
			{ title: 'Curiosity', bucketKey: 1 },
			{ title: 'Determination', bucketKey: 1 },
			{ title: 'Fairness', bucketKey: 1 },
			{ title: 'Faith', bucketKey: 1 },
			{ title: 'Fame', bucketKey: 1 },
			{ title: 'Friendships', bucketKey: 1 },
			{ title: 'Fun', bucketKey: 1 },
			{ title: 'Growth', bucketKey: 1 },
			{ title: 'Happiness', bucketKey: 1 },
			{ title: 'Honesty', bucketKey: 1 },
			{ title: 'Humor', bucketKey: 1 },
			{ title: 'Influence', bucketKey: 1 },
			{ title: 'Inner Harmony', bucketKey: 1 },
			{ title: 'Justice', bucketKey: 1 },
			{ title: 'Kindness', bucketKey: 1 },
			{ title: 'Knowledge', bucketKey: 1 },
			{ title: 'Leadership', bucketKey: 1 },
			{ title: 'Learning', bucketKey: 1 },
			{ title: 'Love', bucketKey: 1 },
			{ title: 'Loyalty', bucketKey: 1 },
			{ title: 'Meaningful Work', bucketKey: 1 },
			{ title: 'Openness', bucketKey: 1 },
			{ title: 'Optimism', bucketKey: 1 },
			{ title: 'Peace', bucketKey: 1 },
			{ title: 'Pleasure', bucketKey: 1 },
			{ title: 'Poise', bucketKey: 1 },
			{ title: 'Popularity', bucketKey: 1 },
			{ title: 'Recognition', bucketKey: 1 },
			{ title: 'Religion', bucketKey: 1 },
			{ title: 'Reputation', bucketKey: 1 },
			{ title: 'Respect', bucketKey: 1 },
			{ title: 'Responsibility', bucketKey: 1 },
			{ title: 'Security', bucketKey: 1 },
			{ title: 'Self-Respect', bucketKey: 1 },
			{ title: 'Service', bucketKey: 1 },
			{ title: 'Spirituality', bucketKey: 1 },
			{ title: 'Stability', bucketKey: 1 },
			{ title: 'Success', bucketKey: 1 },
			{ title: 'Status', bucketKey: 1 },
			{ title: 'Trustworthiness', bucketKey: 1 },
			{ title: 'Wealth', bucketKey: 1 },
			{ title: 'Wisdom', bucketKey: 1 }
		]
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<header>
						<h1>The Values Game</h1>
					</header>
					<Buckets values={this.state.values} />
				</div>
			</div>
		);
	}
}

export default App;
