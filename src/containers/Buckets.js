import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

/* react-dnd allows us to drag and drop values onto a bucket. */
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Bucket from "../components/Bucket";
import { BucketList } from "../constants";
import { assignValueToBucket } from "../store/actions";

const findValueIndex = (values, valueTitle) =>
	values.findIndex((x) => x.title === valueTitle);

const getBucketValueCounts = (values) => {
	const bucketValueCounts = [];

	for (let i = 0; i < BucketList.length; i += 1) {
		bucketValueCounts.push(
			values.filter((object) => object.bucketKey === i).length
		);
	}
	return bucketValueCounts;
};

const checkValidValueDistribution = (values) => {
	let validDistribution = true;
	const bucketValueCounts = getBucketValueCounts(values);

	for (let i = 0; i < BucketList.length; i += 1) {
		if (bucketValueCounts[i] > BucketList[i].maxValues) {
			validDistribution = false;
		}
	}

	return validDistribution;
};

const canMoveValue = (values, valueTitle, bucketKey) =>
	// Check whether the next bucket exists
	!(bucketKey > BucketList.length - 1);

class Buckets extends Component {
	moveValue = (valueTitle, newBucketKey) => {
		const { values, assignValueToBucket } = this.props;
		const valueIndex = findValueIndex(values, valueTitle);

		if (!canMoveValue(values, valueTitle, newBucketKey)) {
			alert("There is no next bucket!");
		} else {
			const nextValues = [
				...values.slice(0, valueIndex),
				{ title: valueTitle, bucketKey: newBucketKey },
				...values.slice(valueIndex + 1)
			];

			if (checkValidValueDistribution(nextValues)) {
				assignValueToBucket(valueIndex, valueTitle, newBucketKey);
			} else {
				alert(
					"This bucket is full. Remove a value from it before adding another one."
				);
			}
		}
	};

	render() {
		const { values, numValues } = this.props;
		const bucketsHTML = BucketList.map((bucket) => (
			<Bucket
				key={bucket.key}
				bucketKey={bucket.key}
				title={bucket.title}
				values={values}
				numValues={numValues[bucket.key]}
				maxValues={bucket.maxValues}
				moveValue={this.moveValue}
			/>
		));

		return <div className="Buckets">{bucketsHTML}</div>;
	}
}

const mapStateToProps = (state) => ({
	values: state.values,
	numValues: getBucketValueCounts(state.values)
});

export default compose(
	connect(
		mapStateToProps,
		{ assignValueToBucket }
	),
	DragDropContext(HTML5Backend)
)(Buckets);
