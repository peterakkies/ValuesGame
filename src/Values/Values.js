import React from 'react';

/* Import Bootstrap components. */
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Values = (props) => {
	const valuesHTML = props.values.map(
		(value, i) =>
			value.bucketKey === props.bucketKey ? (
				<ListGroupItem key={i}>{value.title}</ListGroupItem>
			) : null
	);

	return <ListGroup>{valuesHTML}</ListGroup>;
};

export default Values;
