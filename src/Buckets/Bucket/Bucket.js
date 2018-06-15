import React from 'react';

/* Import Bootstrap components. */
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const bucket = (props) => {
	const valuesHTML = props.values.map(
		(value, i) =>
			value.bucketKey === props.bucketKey ? (
				<ListGroupItem key={i} onClick={props.clicked}>
					{value.title}
				</ListGroupItem>
			) : null
	);

	return (
		<div className="col">
			<h2>{props.title}</h2>
			<p>
				{props.numValues} out of the maximum {props.maxValues}.
			</p>
			<ListGroup>{valuesHTML}</ListGroup>
		</div>
	);
};

export default bucket;
