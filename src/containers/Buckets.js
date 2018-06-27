import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

/* react-dnd allows us to drag and drop values onto a bucket. */
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Bucket from '../components/Bucket';
import { BucketList } from '../constants';
import { assignValueToBucket } from '../store/actions';

class Buckets extends Component {
	moveValue = (valueTitle, newBucketKey) => {
		const valueIndex = findValueIndex(this.props.values, valueTitle);

		if (!canMoveValue(this.props.values, valueTitle, newBucketKey)) {
			alert('There is no next bucket!');
		} else {
			const nextValues = [
				...this.props.values.slice(0, valueIndex),
				{ title: valueTitle, bucketKey: newBucketKey },
				...this.props.values.slice(valueIndex + 1)
			];

			if (checkValidValueDistribution(nextValues)) {
				this.props.assignValueToBucket(valueIndex, valueTitle, newBucketKey);
			} else {
				alert(
					'This bucket is full. Remove a value from it before adding another one.'
				);
			}
		}
	};

	render() {
		const bucketsHTML = BucketList.map((bucket) => {
			return (
				<Bucket
					key={bucket.key}
					bucketKey={bucket.key}
					title={bucket.title}
					values={this.props.values}
					numValues={this.props.numValues[bucket.key]}
					maxValues={bucket.maxValues}
					moveValue={this.moveValue}
				/>
			);
		});

		return <div className="Buckets">{bucketsHTML}</div>;
	}
}

const getBucketValueCounts = (values) => {
	const bucketValueCounts = [];

	for (let i = 0; i < BucketList.length; i++) {
		bucketValueCounts.push(
			values.filter((object) => object.bucketKey === i).length
		);
	}
	return bucketValueCounts;
};

const checkValidValueDistribution = (values) => {
	let validDistribution = true;
	const bucketValueCounts = getBucketValueCounts(values);

	for (let i = 0; i < BucketList.length; i++) {
		if (bucketValueCounts[i] > BucketList[i].maxValues) {
			validDistribution = false;
		}
	}

	return validDistribution;
};

const findValueIndex = (values, valueTitle) => {
	return values.findIndex((x) => x.title === valueTitle);
};

const canMoveValue = (values, valueTitle, bucketKey) => {
	// Check whether the next bucket exists
	return !(bucketKey > BucketList.length - 1);
};

const mapStateToProps = (state) => {
	return {
		values: state.values,
		numValues: getBucketValueCounts(state.values)
	};
};

export default compose(
	connect(
		mapStateToProps,
		{ assignValueToBucket }
	),
	DragDropContext(HTML5Backend)
)(Buckets);
