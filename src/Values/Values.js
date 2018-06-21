import React from 'react';

import Value from './Value/Value.js';

/* Import Bootstrap components. */
import { ListGroup } from 'react-bootstrap';

const getValuesHTML = (values, bucketKey) => {
	const HTML = values.map(
		(value, index) =>
			value.bucketKey === bucketKey ? (
				<Value key={index} clicked={values.clicked} title={value.title} />
			) : null
	);
	return HTML;
};

const values = (props) => {
	return <ListGroup>{getValuesHTML(props.values, props.bucketKey)}</ListGroup>;
};

export default values;
