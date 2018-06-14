import React from 'react';
import Values from '../../Values/Values.js';

const bucket = (props) => {
	return (
		<div className="col">
			<h2>{props.title}</h2>
			<Values bucketKey={props.bucketKey} values={props.values} />
		</div>
	);
};

export default bucket;
