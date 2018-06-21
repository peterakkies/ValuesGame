import React, { Component } from 'react';
import Bucket from './Bucket/Bucket.js';

/* react-dnd allows us to drag and drop values onto a bucket. */
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

/* Describe the value buckets available to the user. */
const bucketList = [
	{ key: 0, title: 'Not important', maxValues: 57 },
	{ key: 1, title: 'Important', maxValues: 25 },
	{ key: 2, title: 'Very important', maxValues: 10 },
	{ key: 3, title: 'Top three', maxValues: 3 }
];

class Buckets extends Component {
	/* 
		We will keep track of which values belong to which bucket using state.
		List of values from James Clear.
	 */
	state = {
		values: [
			{ title: 'Achievement', bucketKey: 0 },
			{ title: 'Adventure', bucketKey: 0 },
			{ title: 'Authenticity', bucketKey: 0 },
			{ title: 'Authority', bucketKey: 0 },
			{ title: 'Autonomy', bucketKey: 0 },
			{ title: 'Balance', bucketKey: 0 },
			{ title: 'Beauty', bucketKey: 0 },
			{ title: 'Boldness', bucketKey: 0 },
			{ title: 'Compassion', bucketKey: 0 },
			{ title: 'Challenge', bucketKey: 0 },
			{ title: 'Citizenship', bucketKey: 0 },
			{ title: 'Community', bucketKey: 0 },
			{ title: 'Competency', bucketKey: 0 },
			{ title: 'Contribution', bucketKey: 0 },
			{ title: 'Creativity', bucketKey: 0 },
			{ title: 'Curiosity', bucketKey: 0 },
			{ title: 'Determination', bucketKey: 0 },
			{ title: 'Fairness', bucketKey: 0 },
			{ title: 'Faith', bucketKey: 0 },
			{ title: 'Fame', bucketKey: 0 },
			{ title: 'Friendships', bucketKey: 0 },
			{ title: 'Fun', bucketKey: 0 },
			{ title: 'Growth', bucketKey: 0 },
			{ title: 'Happiness', bucketKey: 0 },
			{ title: 'Honesty', bucketKey: 0 },
			{ title: 'Humor', bucketKey: 0 },
			{ title: 'Influence', bucketKey: 0 },
			{ title: 'Inner Harmony', bucketKey: 0 },
			{ title: 'Justice', bucketKey: 0 },
			{ title: 'Kindness', bucketKey: 0 },
			{ title: 'Knowledge', bucketKey: 0 },
			{ title: 'Leadership', bucketKey: 0 },
			{ title: 'Learning', bucketKey: 0 },
			{ title: 'Love', bucketKey: 0 },
			{ title: 'Loyalty', bucketKey: 0 },
			{ title: 'Meaningful Work', bucketKey: 0 },
			{ title: 'Openness', bucketKey: 0 },
			{ title: 'Optimism', bucketKey: 0 },
			{ title: 'Peace', bucketKey: 0 },
			{ title: 'Pleasure', bucketKey: 0 },
			{ title: 'Poise', bucketKey: 0 },
			{ title: 'Popularity', bucketKey: 0 },
			{ title: 'Recognition', bucketKey: 0 },
			{ title: 'Religion', bucketKey: 0 },
			{ title: 'Reputation', bucketKey: 0 },
			{ title: 'Respect', bucketKey: 0 },
			{ title: 'Responsibility', bucketKey: 0 },
			{ title: 'Security', bucketKey: 0 },
			{ title: 'Self-Respect', bucketKey: 0 },
			{ title: 'Service', bucketKey: 0 },
			{ title: 'Spirituality', bucketKey: 0 },
			{ title: 'Stability', bucketKey: 0 },
			{ title: 'Success', bucketKey: 0 },
			{ title: 'Status', bucketKey: 0 },
			{ title: 'Trustworthiness', bucketKey: 0 },
			{ title: 'Wealth', bucketKey: 0 },
			{ title: 'Wisdom', bucketKey: 0 }
		]
	};

	/* Returns the number of values in each bucket. */
	getBucketValueCounts = (values) => {
		const bucketValueCounts = [];

		for (let i = 0; i < bucketList.length; i++) {
			bucketValueCounts.push(
				values.filter((object) => object.bucketKey === i).length
			);
		}
		return bucketValueCounts;
	};

	/* Check whether a given value distribution would exceed any bucket's maximum. */
	checkValidValueDistribution = (bucketValueCounts) => {
		let validDistribution = true;

		bucketValueCounts.forEach((count, index) => {
			if (count > bucketList[index].maxValues) {
				validDistribution = false;
			}
		});

		return validDistribution;
	};

	/* Find a value's index in the values array (in state) using the value's title. */
	findValueIndex = (valueTitle) => {
		return this.state.values.findIndex((x) => x.title === valueTitle);
	};

	moveValue = (valueTitle, newBucketKey) => {
		/* Find the index of the value to update in the values array in state. */
		const newIndex = this.findValueIndex(valueTitle);

		if (newBucketKey > bucketList.length - 1) {
			alert('There is no next bucket!');
		} else {
			/* Create a copy of the values array and mutate that copy. */
			const updatedValues = JSON.parse(JSON.stringify(this.state.values));

			updatedValues[newIndex].bucketKey = newBucketKey;
			const updatedBucketValueCounts = this.getBucketValueCounts(updatedValues);

			/* If the next bucket has room for an additional value, update the state. */
			if (this.checkValidValueDistribution(updatedBucketValueCounts)) {
				this.setState({
					bucketValueCounts: updatedBucketValueCounts,
					values: updatedValues
				});
			} else {
				alert('The next bucket is full!');
			}
		}
	};

	valueClickedHandler = (event) => {
		const newIndex = this.findValueIndex(event.target.innerText);

		/* Change the bucket key of the value to be updated. */
		const newBucketKey = this.state.values[newIndex].bucketKey + 1;

		this.moveValue(event.target.innerText, newBucketKey);
	};

	render() {
		const bucketsHTML = bucketList.map((bucket, index) => {
			return (
				<Bucket
					key={index}
					bucketKey={bucket.key}
					title={bucket.title}
					values={this.state.values}
					numValues={this.getBucketValueCounts(this.state.values)[bucket.key]}
					maxValues={bucket.maxValues}
					clicked={this.valueClickedHandler}
					moveValue={this.moveValue}
				/>
			);
		});

		return <div className="row">{bucketsHTML}</div>;
	}
}

export default DragDropContext(HTML5Backend)(Buckets);
