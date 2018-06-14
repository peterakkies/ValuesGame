import React from 'react';
import Bucket from './Bucket/Bucket.js';

/* Describe the value buckets available to the user. */
const bucketList = [
	{ key: 1, title: 'Not important', maxValues: 50 },
	{ key: 2, title: 'Important', maxValues: 25 },
	{ key: 3, title: 'Very important', maxValues: 10 },
	{ key: 4, title: 'Top three', maxValues: 3 }
];

const buckets = (props) => {
	const bucketsHTML = bucketList.map((bucket, index) => {
		return (
			<Bucket
				bucketKey={bucket.key}
				title={bucket.title}
				values={props.values}
				maxValues={bucket.maxValues}
			/>
		);
	});

	return <div className="row">{bucketsHTML}</div>;
};

export default buckets;
