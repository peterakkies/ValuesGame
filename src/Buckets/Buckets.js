import React from 'react';
import Bucket from './Bucket/Bucket.js';

/* Import Bootstrap components. */
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const bucketList = [
	['Not important', 50],
	['Important', 25],
	['Very important', 10],
	['Top three', 3]
];

/* Values list from James Clear. */
const valuesList = [
	'Authenticity',
	'Achievement',
	'Adventure',
	'Authority',
	'Autonomy',
	'Balance',
	'Beauty',
	'Boldness',
	'Compassion',
	'Challenge',
	'Citizenship',
	'Community',
	'Competency',
	'Contribution',
	'Creativity',
	'Curiosity',
	'Determination',
	'Fairness',
	'Faith',
	'Fame',
	'Friendships',
	'Fun',
	'Growth',
	'Happiness',
	'Honesty',
	'Humor',
	'Influence',
	'Inner Harmony',
	'Justice',
	'Kindness',
	'Knowledge',
	'Leadership',
	'Learning',
	'Love',
	'Loyalty',
	'Meaningful Work',
	'Openness',
	'Optimism',
	'Peace',
	'Pleasure',
	'Poise',
	'Popularity',
	'Recognition',
	'Religion',
	'Reputation',
	'Respect',
	'Responsibility',
	'Security',
	'Self-Respect',
	'Service',
	'Spirituality',
	'Stability',
	'Success',
	'Status',
	'Trustworthiness',
	'Wealth',
	'Wisdom'
];

const buckets = () => {
	return (
		<div className="row">
			<div className="col">
				<h2>Not important</h2>
				<ListGroup>
					{valuesList.map((value, i) => (
						<ListGroupItem key={i}>{value}</ListGroupItem>
					))}
				</ListGroup>
			</div>
			<div className="col">
				<h2>Important</h2>
				<Bucket />
			</div>
			<div className="col">
				<h2>Very important</h2>
				<Bucket />
			</div>
			<div className="col">
				<h2>Top three</h2>
				<Bucket />
			</div>
		</div>
	);
};

export default buckets;
